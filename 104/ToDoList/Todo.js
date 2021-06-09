$('ul').on('click','span',function(event){
  $(this).parent().hide(300,function(){ 
    $(this).remove(); 
    
  });
})
$("input[type='text']").on('keypress',function(enter){
  if(enter.which === 13){
    var text = $(this).val();
    $(this).val("");
    $('ul').append("<li><span><i class='fas fa-trash'></i> </span> "+text+"</li>");
  }
})