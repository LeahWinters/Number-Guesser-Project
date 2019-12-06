var clearButton = document.getElementById("clear-btn");

function checkInputFields(){
  var player1Name = document.getElementById("name-text1");
  var player1Guess = document.getElementById("guess-num1");
  var player2Name = document.getElementById("name-text2");
  var player2Guess = document.getElementById("guess-num2");
  if(player1Name.value.length > 0 || player1Guess.value.length > 0 || player2Name.value.length > 0 || player2Guess.value.length > 0){
     clearButton.disabled = false;
      clearButton.style.backgroundColor = "#6e6e6e"
     } else {
       clearButton.disabled = true;
       clearButton.style.backgroundColor = "#d0d2d3"
     }
}

var challengerForm = document.getElementById("gamer-form");

challengerForm.addEventListener("keyup", checkInputFields);
