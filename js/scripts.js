//<!-- Back End -->
function numberConvert(steve) {
  var fiveTens = ["1", "5", "10", "50", "100", "500", "1000"];
  var romanSymbols=["I", "V", "X", "L", "C", "D", "M"];
  if(steve === "0"){
    return steve;
  } else if (parseInt(steve) > 3999) {
    return "Get down from your high horse lol";
  } else if (fiveTens.includes(steve)){
      for(var i = 0; i < fiveTens.length; i++){
        if(fiveTens[i] === steve){
          return romanSymbols[i];
        }
      }
    //more efficient way with indexOf (for future reference)
    //return romanSymbols[fiveTens.indexOf(steve)];
  }
  else if(steve === "4"){
    return "IV";
  }
  else if(parseInt(steve) < 9){
    var romNum = "I";
    var i = 2;
    if(parseInt(steve) > 5){
      romNum = "V"
      i = 6;
    }
    for(i; i <= parseInt(steve); i++){
      romNum += "I";
    }
    return romNum;
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
