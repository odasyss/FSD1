const persons=[
    {name:"Jake", age:28},
    {name:"Jorge", age:29},
    {name:"Danny", age:20},
    {name:"Joshua", age:28},
    {name:"Andrew", age:40},
    {name:"Reese", age:25},
    {name:"Kirby", age:27},
    {name:"paola", age:26},
]
for(var i=0; i<persons.length;i++){
    document.writeln(`Name: ${persons[i].name}<br>`);
    // document.writeln(persons[i].name)
}
const olders= persons.filter(person=>person.age>25);
console.log(olders);

const kirby= persons.find(person=>person.name=="kirby");
console.log(kirby.age);

let total = persons.reduce((ages,person)=>ages + person.age
,0);
console.log(total/persons.length);
document.write(`<br> The mean of the ages is: ${total/persons.lengh}`);