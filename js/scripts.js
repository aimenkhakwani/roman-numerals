//<!-- Back End -->
function betweenDigits(partOfSteve, one, five, ten){
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
  if(parseInt(steve) < 1){
    return "What are you doing way down there!";
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
    var concatRoman = "";
    for(var i = 0; i < steveArray.length; i++){
      var stevePart = parseInt(steveArray[i]);
      if(stevePart !== 0){
        if(i < 3 ){
          concatRoman = betweenDigits(stevePart, romanSymbols[i*2], romanSymbols[i*2+1], romanSymbols[i*2+2]) + concatRoman;
        }
        else {
          concatRoman = betweenDigits(stevePart, romanSymbols[6], "", "") + concatRoman;
        }
      } //end stevePart !== 0
    }
    return concatRoman;//end for loop
  } //end else
} //end function


//<!-- Front End  -->
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#input").val();
    var result = numberConvert(userInput)
    $("#result").text(result).show();
  });
});
