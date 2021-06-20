function getHelloMessage(name){
    return "Hello there"+ name +", how is it Going My Dude?";
}
function sum(x,y){
    // 
    return x + y;

}

class Car{
    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year;
        this.owner= "Odasys";

    }
}

function testClass(){
    let c1 =new Car("Ford", "A", "1934");
    console.log(c1);
}

// this is an object constructor
function Dog(name, age, color){
    this.name=name;
    this.age=age;
    this.color=color;

}

function createObjects(){
    // object literal
    let data = {
        name: "Test1", 
        speed: 111,
        color: "Red"
    };
    console.log(data);

    // Object constructor
    // more than one object
    let fido = new Dog("Fido", 2, "white");
    console.log(fido);
    let lola = new Dog("Lola", 11, "Brown");
    console.log(lola);

}

function runTests(){
    console.log("Starting Tests...");
    let message = getHelloMessage("Odasys");
    console.log(message);

    let result = sum(100, 11);
    console.log("the result is:" + result);
}
// HomeWork 1
/**
     *  Show an error if the user is trying to divide by zero and return zero as the result
     */
// you should not allow the user to divide by ZERO..
let divRes = divide(9, 3);
let divRes2 = divide(1, 8);
let divRes3 = divide(10, 0);
console.log(divRes, divRes2, divRes3);

function divide(num1, num2) {
    if (num2 == 0) {
        console.log("error, Result not allowed");
        return 0;
    }
    return num1 / num2;
}



function testAjaxGet(){
    $.ajax({
        url: "https://restclass.azurewebsites.net/api/test",
        type: "GET",
        success: function(response){
            console.log("SERVER IS ", response);

        },
        error: function(){
            console.log("ERROR", errorDetails);
        }
        
    });
}