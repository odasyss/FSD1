class Message {
    constructor(name, phone, email, message) {
      this.name=name;
      this.phone=phone;
      this.email=email;
      this.message=message
    }
}

var txtName = document.getElementById('userName');
var txtPhone = document.getElementById('userPhone');
var txtEmail = document.getElementById('userEmail');
var txtMessage = document.getElementById('userMessage');

$("#message-btn").on("click",function(){
    var theMessage = new Message(txtName.value,txtPhone.value,txtEmail.value,txtMessage.value);
    console.log(theMessage);
});