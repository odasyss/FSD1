var count = 0;
// index=0;

function saveTodo() {
    let text = $("#todoTxt").val();
    //validations
    if (!text) {
        alert("Information missing..")
        return; 
        }
    count++;
    updateCounter();
    let update = "<div class='todo-item'>" + text + " <button id='del' class='btn btn-sm btn-danger'> Delete </button> </div>"
    
    $("#todoContainer").append(update);
    //clear text
    $("#todoTxt").val("");
    $("#todoTxt").focus();
}

function updateCounter(){
    let counter = "<div class='counter-task'> To Do's: " + count + "</div>";
    $("#tasks").html(counter);
}

function init() {
    $("#btnSave").click(saveTodo);
    $("#todoTxt").keypress(function (args) {
        if (args.key == "Enter") {
            saveTodo();
        }
    });
    $("#todoContainer").on('click', '.btn-danger', function () {
        let div = $(this).parent();
        div.remove();
        count--;
        updateCounter();
    });
}

window.onload = init();