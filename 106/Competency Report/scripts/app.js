// INV HW: Variable Scope on JS
var important = false;
var serverUrl = "https://fsdiapi.azurewebsites.net/";
var myTasks = [];
var defaultTaskStatus = 1;

function toggleImportant() {
  if (!important) {
    important = true;
    $("#iImportant").removeClass("far").addClass("fas");
  } else {
    important = false;
    $("#iImportant").removeClass("fas").addClass("far");
  }
}

function saveTask() {
  // console.log("SAVING....");
  // read Value
  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let category = $("#selCategory").val();
  let location = $("#txtLocation").val();
  let dueDate = $("#selDueDate").val();
  let color = $("#selColor").val();

  let task = new Task(
    title,
    important,
    category,
    description,
    location,
    dueDate,
    color,
    1
  );
  //   console.log(task);

  $.ajax({
    url: serverUrl + "api/tasks/",
    type: "POST",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (res) {
      let task = JSON.parse(res);
      myTasks.push(task);
      displayTask(task);
      clearInput();

      // displayTask(savedTsk);
    },
    error: function (eDetails) {
      console.error("ERROR Saving", eDetails);
    },
  });
  // displayTask(task);
}
// Create an object

// send object to a backend server

// Display the Task

function displayTask(task) {
  let syntax = `<div id="${task._id}" class="task"> 
        <i class='important fas fa-star'></i>
        <div class="description">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div> 
        <label class="due-date">${task.dueDate}</label>
        <label class="location">${task.location}</label>`;

  if (task.status == 1) {
    syntax += `<button onclick="doneTask('${task._id}')" class="btn btn-sm btn-primary">Done</button></div>`;
    $("#pendingList").append(syntax);
  } else if (task.status == 2) {
    syntax += `<button onclick="removeTask('${task._id}')" class="btn btn-sm btn-danger">Remove</button></div>`;
    $("#doneList").append(syntax);
  }
}

function doneTask(id) {
  // console.log("Finished..." , id);
  // get the object
  for (let i = 0; i < myTasks.length; i++) {
    let task = myTasks[i];
    if (task._id == id) {
      task.status = 2;

      $.ajax({
        url: serverUrl + "api/tasks",
        // console.log(task.title);
        type: "PUT",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function (res) {
          console.log("response..", res);
          $(`#${id}`).remove();
          displayTask(task);
        },
        error: function (err) {
          console.error("error...", err);
        },
      });
    }
  }
}
function removeTask(id) {
  // get the object
  for (let i = 0; i < myTasks.length; i++) {
    let task = myTasks[i];
    if (task._id == id) {
      task.status = 3;

      $.ajax({
        url: serverUrl + "api/tasks",
        type: "PUT",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function (res) {
          console.log("Responses....", res);

          //remove task from done list
          $(`#${id}`).remove();
        },
        error: function (err) {
          console.error("ERROR....", err);
        },
      });
    }
  }
}
function fetchTasks() {
  // GET request URL:url: serverUrl +"api/tasks/",respinse
  $.ajax({
    url: serverUrl + "api/tasks",
    type: "GET",
    // data: JSON.stringify(task),
    // contentType:"application/json",
    success: function (res) {
      let data = JSON.parse(res);
      for (let i = 0; i < data.length; i++) {
        if (task.name == "Odasys") {
          myTasks.push(task);
          displayTask(task);
        }
      }
    },
  });
}
function clearInput() {
  $("#txtTitle").val("");
  $("#txtDescription").val("");
  $("#selCategory").val("");
  $("#txtLocation").val("");
  $("#txtDueDate").val("");
  $("#txtColor").val("#255,255,255");
}
function init() {
  console.log("My Task Manager");
  // load data

  // hook events
  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(saveTask);
}
window.onload = init;
