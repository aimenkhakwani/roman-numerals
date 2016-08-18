//<!-- Back End -->
function betweenDigits(partOfSteve, one, five, ten){
  //console.log("this is partOfSTeve" + partOfSteve);
  // partOfSteve = 6, one = X, five = L, ten = C
  if(partOfSteve === 4 || partOfSteve === 9){
    var endNum = five;
    if(partOfSteve === 9){
      endNum = ten;
    }
    return one + endNum;
  }
  else if(partOfSteve < 9){
    var romNum = one;
    var i = 2;
    if(partOfSteve >= 5){
      romNum = five
      i = 6;
    }
    for(i; i <= partOfSteve; i++){
      romNum += one;
    }
    return romNum;
  }
}

function numberConvert(steve) {
  var fiveTens = ["1", "5", "10", "50", "100", "500", "1000"];
  var romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];
  if(steve === "0"){
    return steve;
  }

  else if (parseInt(steve) > 3999) {
    return "Get down from your high horse lol";
  }

  else if (fiveTens.includes(steve)){
      for(var i = 0; i < fiveTens.length; i++){
        if(fiveTens[i] === steve){
          return romanSymbols[i];
        }
      }
    //more efficient way with indexOf (for future reference)
    //return romanSymbols[fiveTens.indexOf(steve)];
  }

  else {
    steveArray = steve.split("").reverse();
    for(var i = 0; i < steveArray.length; i++){
      var stevePart = parseInt(steveArray[i]);
      if(stevePart !== 0){
        if(i === 0){
          return betweenDigits(stevePart, romanSymbols[0], romanSymbols[1], romanSymbols[2]);
        } else if (i === 1){
          return betweenDigits(stevePart, romanSymbols[2], romanSymbols[3], romanSymbols[4]);
        } else if (i === 2){
          return betweenDigits(stevePart, romanSymbols[4], romanSymbols[5], romanSymbols[6]);
        } else {
          return betweenDigits(stevePart, romanSymbols[6], "", "");
        }
      } //end stevePart !== 0
    } //end for loop
  } //end else
} //end function

//<!-- Front End  -->
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#input").val();
    var result = numberConvert(userInput)
    $("#result").text(result);
  });
});
