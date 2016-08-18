//<!-- Back End -->
 function numberConvert(steve) {
   if(steve === "0"){
     return steve;
   } else if (parseInt(steve) > 3999) {
     return "Get down from your high horse lol";
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
