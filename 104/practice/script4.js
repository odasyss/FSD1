var nav=document.getElementById("navigator");
// console.log(nav);

var a =document.getElementsByTagName("a");
// console.log(a);

var item=document.getElementsByClassName("items");
// console.log(items);

function hideBtn(){
    // console.log("hide btn");
    //.style.displlay="none"
    for(var i=0;i<a.length;i++){
        a[i].style.display="none";
    }
    
}

var li =document.querySelector(".ul-list li");
console.log(li);

var liALL= document.querySelector(".ul-listt li");
console.log(liALL);

var p= document.createElement("p");
console.log(p);

var text= document.createTextNode("hello world");
console.log(text);

p.appendChild(text);
console.log(p);
document.querySelector("nav").appendChild(p);