var clearButton = document.getElementById("clear-btn");
var challengerForm = document.getElementById("gamer-form");
var player1Name = document.getElementById("name-text1");
var player1Guess = document.getElementById("guess-num1");
var player2Name = document.getElementById("name-text2");
var player2Guess = document.getElementById("guess-num2");
var submitButton = document.getElementById("submit-btn");
var source1 = document.getElementById('guess-num1');
var innerTextOutput1 = document.getElementById('guessed-num1');
var source2 = document.getElementById('guess-num2');
var innerTextOutput2= document.getElementById('guessed-num2');

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
    }else {
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


function clearText(){
  player1Guess.value = "";
  player2Guess.value = "";

// I want to take the text form input fields and populate the fields

function submitGuess(e){
  e.preventDefault();
  debugger
  innerTextOutput1.innerText = source1.value;
  innerTextOutput2.innerText = source2.value;

}
