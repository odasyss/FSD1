var lion={
    name: "Simba",
    foodType: "Carnivore",
    king: true
}
var monkey={
    name:"Rafiki",
    foodType:"Fruit",
    king:false

}
console.log(monkey);
//object construtor

class Animal {
    constructor(name, foodType, king) {
        this.name = name;
        this.foodType = foodType;
        this.king = king;
    }
}

var animal1= new Animal("Simba","Carnivore",true);
var animal2= new Animal("Rafiki","Fruits",false);
var animal3= new Animal("Scar","Carnivore",false);

// console.log(animal1);
// console.log(animal2);
// console.log(animal3);

class Task{
    constructor(name,priority){
        this.name=name;
        this.priority=priority;
    }
}
const task1=new Task("Play Zelda", "High");
const task2= new Task("Do my hw", "Medium");
const task3= new Task("Go running", "Low");

// console.log(task1,task2,task3);

//create a constr and create three objects

class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}

var Father = new Person("John", "Doe", 50, "blue");
var Mother = new Person("Sally", "Rally", 48, "green");
var Brother = new Person("Alex", "Do", 28, "Brown");
// console.log(Father, Mother, Brother);

class Bird{
    constructor(mass, sound, color){
        this.mass=mass;
        this.sound=sound;
        this.color=color;
        this.display=function(){
            return `
            <div style= "background-color:${this.color};
            border-radius:50%; width:${this.mass}px;
            height:${this.mass}px;">
            <p>${this.sound}</p> ... 
            <p style= "text-align:center;" > o > o </p></div>`;
        }
    }
}
var bird1= new Bird(50, "Yeeeii.mp3", "Red");
document.getElementById("bird").innerHTML=bird1.display();
