// INV HW: Variable Scope on JS
var important = false;
var serverUrl = "http://fsdiapi.azurewebsites.net/";



function toggleImportant(){
    if(!important){
        important = true;
        $("#iImportant").removeClass("far").addClass("fas");
     }else{
         important= false;
         $("#iImportant").removeClass("fas").addClass("far");
     }
}

function saveTask(){
    console.log("SAVING....");
    // read Value
    let title = $("#txtTitle").val();
    let description = $("#txtDescription");
    let category = $("#selCategory");
    let location = $("#txtLocation");
    let dueDate = $("#selDueDate");
    let color = $("#selColor");

    let task = new Task(title, important, category, description, location, dueDate, color);
    console.log(task);


    $.ajax({
        url: serverUrl +"api/tasks/",
        type:"POST",
        data: JSON.stringify(task),
        contentType:"application/json",
        success: function(res){
            console.log("SERVER ", res);

        },
        error: function(eDetails){
            console.error("ERROR Saving", eDetails);

        }


    });
    displayTask(task);
        
    }
    // Create an object

    // send object to a backend server

    // Display the Task
function displayTask(task){
    let syntax = 
    `<div class="task">
        <i class= 'important fas fa-star'></i>
        <div class= "description>
            <h5>
                ${task.title}
            </h5>
            <p>
                ${task.description}
            </p>
            </div>
            <label class= "due-date>
                ${task.dueDate}
            </label>
            <label class="location">
                ${task.location}
            </label>
        </div>`;

    $("#pendingList").append(syntax);

}


function init(){
    console.log("My Task Manager");
    // load data
    
// hook events
$("#iImportant").click(toggleImportant);
$("#btnSave").click(saveTask);

}
window.onload= init;

