var clearButton = document.getElementById("clear-btn");
var challengerForm = document.getElementById("gamer-form");
var player1Name = document.getElementById("name-text1");
var player1Guess = document.getElementById("guess-num1");
var player2Name = document.getElementById("name-text2");
var player2Guess = document.getElementById("guess-num2");
var submitButton = document.getElementById("submit-btn");
var innerTextOutput1 = document.getElementById("guessed-num1");
var innerTextOutput2 = document.getElementById("guessed-num2");
var challenger1Name = document.getElementById("name1");
var challenger2Name = document.getElementById("name2");
var randomNum = generateNum();
var returnVal1 = document.getElementById("return-value1");
var returnVal2 = document.getElementById("return-value2");
var updateButton = document.getElementById("update-btn");

challengerForm.addEventListener("input", checkInputFields);
challengerForm.addEventListener("keyup", checkInputFields2);
clearButton.addEventListener("click", clearInputs);
submitButton.addEventListener("click", submitGuess);

function generateNum() {
  return Math.round(Math.random() * 100);
}

function checkInputFields() {
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

function clearInputs() {
  player1Name.value = "";
  player1Guess.value = "";
  player2Name.value = "";
  player2Guess.value = "";
}

function submitGuess() {
  innerTextOutput1.innerText = player1Guess.value;
  innerTextOutput2.innerText = player2Guess.value;
  challenger1Name.innerText = player1Name.value;
  challenger2Name.innerText = player2Name.value;
  clearButton.disabled = true;
  guessResult1();
  checkInputFields2();
}

function clearText() {
  player1Guess.value = "";
  player2Guess.value = "";
}

function guessResult1() {
  if (player1Guess.value < randomNum) {
     returnVal1.innerText = "That's too low!";
  } else if (player1Guess.value > randomNum) {
    returnVal1.innerText = "That's too high!";
  } else {
    returnVal1.innerText = "BOOM!";
  }
  guessResult2();
}

function guessResult2() {
  if (player2Guess.value < randomNum) {
     returnVal2.innerText = "That's too low!";
  } else if (player2Guess.value > randomNum) {
    returnVal2.innerText = "That's too high!";
  } else {
    returnVal2.innerText = "BOOM!";
  }
  clearText();
}

// js for min max range box1
var minNum = document.getElementById("min-num");
var maxNum = document.getElementById("max-num");
var minInput = document.getElementById("min-input");
var maxInput = document.getElementById("max-input");

minInput.addEventListener("input", activateUpdateBtn);
maxInput.addEventListener("input", activateUpdateBtn);
updateButton.addEventListener("click", updateMinMax);

function activateUpdateBtn() {
  if(minInput.value.length > 0 && maxInput.value.length > 0) {
    updateButton.disabled = false;
  } else {
      updateButton.disabled = true;
  }
}

function clearRangeNum(){
  minInput.value = "";
  maxInput.value = "";
}

function updateMinMax() {
  minNum.innerText = minInput.value;
  maxNum.innerText = maxInput.value;
}

// custon range number js

updateButton.addEventListener("click", customRangeNumber)

function customRangeNumber(){
  min = parseInt(minInput.value);
  max = parseInt(maxInput.value);
  randomNum = Math.floor(Math.random() * (max - min)) + min;
  clearRangeNum();
}
