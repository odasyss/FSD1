const salon = {
  name: 'The Fashion Pet',
  phone: '555-555-5555',
  address: {
    street: `University`,
    number: `543-k`
  },
  hours: {
    open: '9am',
    close: `5pm`
  },
  pets: []
}
var {
  name,
  phone,
  address: {
    street,
    number
  },
  hours: {
    open,
    close
  }
} = salon;

function displayInfo() {
  document.getElementById(`information`).innerHTML = `<p>${name}</p>${street},${number}</p>
    <p> It is open from ${open} to ${close} </p>
    `;
}

displayInfo();
var c=0;
//create constructor
class Pet {
  constructor(name, type, age, breed, gender, service, owner, contactPhone) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.owner = owner;
    this.contactPhone = contactPhone;
    this.price = 0;
    this.id=c++;
  }
}

//create register function
var txtName = document.getElementById('petName');
var txtAge = document.getElementById('petAge');
var txtType = $('#type');
var txtBreed = document.getElementById('petBreed');
var txtGender = document.getElementById('petGender');
var txtService = document.getElementById('petService');
var txtOwner = document.getElementById('ownerName');
var txtPhone = document.getElementById('conctactPhone');

function register() {
  var thePet = new Pet(txtName.value, txtType.val(), txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtPhone.value);
  if (txtName.value == "" || txtService.value == "") {
    $("#alert-box").removeClass("hidden");
    $("#alert-box").addClass("alert-danger");
    $("#alert-box").text("Add the required information");
    setTimeout(function(){
        $("#alert-box").addClass("hidden");
        $("#alert-box").addClass("alert-danger");
    },2000);
  } else {
    //console.log(thePet);
    salon.pets.push(thePet);
    clearInputs();
    displayTable(thePet);
    $("#alert-box").removeClass("hidden");
    $("#alert-box").text("The register was successful");
    setTimeout(function(){
        $("#alert-box").addClass("hidden");
        $("#alertbox").addClass("alert-success");
    },2000);
}
}

function displayCards(aPet) {
  if (aPet.service == "hair") {
    aPet.price = 40;
  } else if (aPet.service == "nails") {
    aPet.price = 10;
  } else if (aPet.service == "shower") {
    aPet.price = 20;
  } else if (aPet.service == "full") {
    aPet.price = 50;
  }

  var icon = "";
  if (aPet.type == "dog") {
    icon = "🐕";
  } else if (aPet.type == "cat") {
    icon = " 🐈";
  } else if (aPet.type == "bird") {
    icon = "🐦";
  } else{
    icon = "👽";
  }

  var div=document.getElementById('types');
  div.innerHTML=`<p>🐕=1 🐈=1 🐦=1 👽=1  </p>`

  tmp = `<div id="${aPet.id}" class="pet">
          <h3 class="pet-name"> Name: ${aPet.name} <button onclick="deletePet(${aPet.id})"> 🗑️</button> </h3>
          <p> Type: ${aPet.type} ${icon} <p>
          <p> Age: ${aPet.age}</p>
          <p> Breed: ${aPet.breed}</p>
          <p> Gender: ${aPet.gender}</p>
          <p> Service: ${aPet.service}</p>
          <p> Price: $${aPet.price}</p>
          <p> Owner: ${aPet.owner}</p>
          <p> Phone: ${aPet.contactPhone}</p>
        </div>
      `;
  document.getElementById('pets').innerHTML += tmp;
  profitCalculation();
}

function clearInputs() {
  txtName.value = "";
  txtType.value = "";
  txtAge.value = "";
  txtBreed.value = "";
  txtGender.value = "";
  txtService.value = "";
  txtOwner.value = "";
  txtPhone.value = "";
}
profitCalculation();

function profitCalculation() {
  var sum = 0;
  for (var i = 0; i < salon.pets.length; i++) {
    sum = sum + salon.pets[i].price;
  }
  document.getElementById('profits').innerHTML = `Profits=$${sum}`
  //challenge:use the forEach calculate the profits
}

function deletePet(petId){
  //console.log("delete pet " +petId);
  //select card from html
  var card=$('#'+petId);
  //search pet in array
  var indexDelete;
  for(var i=0;i<salon.pets.length;i++){
    if(salon.pets[i].id==petId){
      indexDelete=i;
      break;
    }
  }
  //console.log(indexDelete);
  salon.pets.splice(indexDelete,1);
  //remove ppet from array
  //remove from htmls
  //card.remove();
  $(card).remove();
  
  profitCalculation();
}

function displayTable(aPet){
  if (aPet.service == "hair") {
    aPet.price = 40;
  } else if (aPet.service == "nails") {
    aPet.price = 10;
  } else if (aPet.service == "shower") {
    aPet.price = 20;
  } else if (aPet.service == "full") {
    aPet.price = 50;
  }

  var icon = "";
  if (aPet.type == "dog") {
    icon = "🐕";
  } else if (aPet.type == "cat") {
    icon = " 🐈";
  } else if (aPet.type == "bird") {
    icon = "🐦";
  } else{
    icon = "👽";
  }
var row=`
  <tr id="${aPet.id}">
    <td>${aPet.name} </td>
    <td>${aPet.age} </td>
    <td>${aPet.gender} </td>
    <td>${aPet.breed} </td>
    <td>${icon} </td>
    <td>${aPet.service} </td>
    <td>$${aPet.price} </td>
    <td>${aPet.owner} </td>
    <td>${aPet.contactPhone} </td>
  <td> <button id="pet-button" onclick="deletePet(${aPet.id})"> 🗑️</button></td>
</tr>`
$('#pet-table').append(row);
profitCalculation();
}

function searchPet(){
  var ss=$('#search').val();
  console.log(ss);
  salon.pets.forEach(pet=>{
    if(pet.name.toLowerCase().includes(ss.toLowerCase()) || pet.service.toLowerCase().includes(ss.toLowerCase())){
      $('#'+pet.id).removeClass('unactive')
    }else{
      $('#'+pet.id).addClass('unactive');
    }
  });
}


function init() {
  console.log("init");
  //push the pets into the array
  //display pets
  var scooby = new Pet("Scooby", "dog", 50, "Dane", "Male", "hair", "Shaggy", "555-555-5555");
  var speedy = new Pet("Speedy", "bird", 80, "Mixed", "male", "full", "bugs", "888-888-8888");
  salon.pets.push(scooby, speedy);
  displayTable(scooby);
  displayTable(speedy);
  profitCalculation();
  //hook events
  $('#register-btn').click(register);
  $('#search-btn').click(searchPet);
  $('#search').keypress(function(e){
    if(e.key==="Enter"){
      searchPet();
    };
  });
  $('#search').on('keyup',searchPet);
}

window.onload = init;
