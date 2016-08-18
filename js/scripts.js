//<!-- Back End -->
 function numberConvert(steve) {
   if(steve === "0"){
     return steve;
   }
 }

//<!-- Front End  -->
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#input").val();
    var result = numberConvert(userInput)
    $("#result").text(result);
  });
});
