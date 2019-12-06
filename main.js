var clearButton = document.getElementById("clear-btn");
var challengerForm = document.getElementById("gamer-form");
var player1Name = document.getElementById("name-text1");
var player1Guess = document.getElementById("guess-num1");
var player2Name = document.getElementById("name-text2");
var player2Guess = document.getElementById("guess-num2");
var submitButton = document.getElementById("submit-btn");

challengerForm.addEventListener("keyup", checkInputFields);
clearButton.addEventListener("click", clearInputs);
submitButton.addEventListener("click", submitGuess);

function checkInputFields(){
  if(player1Name.value.length > 0 || player1Guess.value.length > 0 || player2Name.value.length > 0 || player2Guess.value.length > 0){
     clearButton.disabled = false;
      clearButton.style.backgroundColor = "#6e6e6e";
     } else {
       clearButton.disabled = true;
       clearButton.style.backgroundColor = "#d0d2d3";
     }
  if(player1Name.value.length > 0 && player1Guess.value.length > 0 && player2Name.value.length > 0 && player2Guess.value.length > 0){
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#6e6e6e";
    } else {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = "#d0d2d3";
  }
}

function clearInputs(){
  player1Name.value = "";
  player1Guess.value = "";
  player2Name.value = "";
  player2Guess.value = "";
}

function submitGuess(e){
  e.preventDefault();
  console.log("heyyyy");
  var nameOne = document.getElementById("name1");
  nameOne.innerText = player1Name.value;
  var numOne = document.getElementById("guessed-num1");
  numOne.innerText = player1Guess.value;
  var nameTwo = document.getElementById("name2");
  nameTwo.innerText = player2Name.value;
  var numTwo = document.getElementById("guessed-num2");
  numTwo.innerText = player2Guess.value;
}
