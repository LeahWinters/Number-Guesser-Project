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

challengerForm.addEventListener("input", checkInputFields);
challengerForm.addEventListener("keyup", checkInputFields2);
clearButton.addEventListener("click", clearInputs);
submitButton.addEventListener("click", submitGuess);
// submitButton.addEventListener("click", clearText);

function checkInputFields(){
  if(player1Name.value.length > 0 || player1Guess.value.length > 0 || player2Name.value.length > 0 || player2Guess.value.length > 0){
     clearButton.disabled = false;
     } else {
       clearButton.disabled = true;

     }
   }

function checkInputFields2() {
  if(player1Name.value.length > 0 && player1Guess.value.length > 0 && player2Name.value.length > 0 && player2Guess.value.length > 0){
    submitButton.disabled = false;
    }else {
      submitButton.disabled = true;
  }
}

function clearInputs(){
  player1Name.value = "";
  player1Guess.value = "";
  player2Name.value = "";
  player2Guess.value = "";
}


function submitGuess(){
  innerTextOutput1.innerText = source1.value;
  innerTextOutput2.innerText = source2.value;
  clearText();
  clearButton.disabled = true;
  checkInputFields2();
}

// this chunk of code is prohibiting our buttons to work

function clearText(){
  player1Guess.value = "";
  player2Guess.value = "";
}

// we want the buttons to disable after we click submit buttons
