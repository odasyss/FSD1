//click on trashd to delete 
$('ul').on('click','span',function(event){
  $(this).parent().fadeOut(500,function(){ 
    $(this).remove(); // remove
  });
  event.stopPropagation();
})
$('ul').on('mouseover','span',function(){
  this.style.display;
}).on('click','span',function(){
  this.style.display = "none";
})

$("input[type='text']").on('keypress',function(enter_key){
  if(enter_key.which === 13){
    var text = $(this).val();
    $(this).val("");
    $('ul').append("<li><span><i class='fas fa-trash-alt'></i> </span> "+text+"</li>");
  }
})
