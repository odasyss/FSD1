//objects
const person={
    name: "john",
    age:80,
    birthYear:function(){
        return new Data().getfullYear()-this.age;
    }
}
console.log(person.birthYear());

const client= {
    name= "alex",
    type= "Premium",
    data:{
        address:{
            city: "Los Angeles",
            country: "USA"
        },
        account:{
            date: "12-30-2018",
            bonus:10
        }
    }
}
console.log(client.data.address.country);

//Display on the console the Country.