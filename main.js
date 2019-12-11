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
var minNum = document.getElementById("min-num");
var maxNum = document.getElementById("max-num");
var minInput = document.getElementById("min-input");
var maxInput = document.getElementById("max-input");
var randomNum = generateNum();
var returnVal1 = document.getElementById("return-value1");
var returnVal2 = document.getElementById("return-value2");
var updateButton = document.getElementById("update-btn");
var guessHolder = 0;
var column2 = document.getElementById("column-2");
var winnerName = null;
var currentMinRange = 1;
var currentMaxRange = 100;

challengerForm.addEventListener("input", checkInputFields);
challengerForm.addEventListener("keyup", checkInputFields2);
clearButton.addEventListener("click", clearInputs);
submitButton.addEventListener("click", submitGuess);
minInput.addEventListener("input", activateUpdateBtn);
maxInput.addEventListener("input", activateUpdateBtn);
updateButton.addEventListener("click", updateMinMax);

function generateNum() {
  return Math.round(Math.random() * 100);
}

// can we name this something that relates to the clear button activation?
function checkInputFields() {
  if(player1Name.value.length > 0 || player1Guess.value.length > 0 || player2Name.value.length > 0 || player2Guess.value.length > 0){
     clearButton.disabled = false;
     } else {
       clearButton.disabled = true;
     }
   }

// can we name this something related to enabeling the submit button?
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

function clearText() {
  player1Guess.value = "";
  player2Guess.value = "";
}

function submitGuess() {
  innerTextOutput1.innerText = player1Guess.value;
  innerTextOutput2.innerText = player2Guess.value;
  challenger1Name.innerText = player1Name.value;
  challenger2Name.innerText = player2Name.value;
  clearButton.disabled = true;
  submitButton.disabled = true;
  guessResult1();
  // submitErrorMessage();
  clearText();
}

function guessResult1() {
  guessHolder = guessHolder+2;
  if (player1Guess.value < randomNum) {
     returnVal1.innerText = "That's too low!";
  } else if (player1Guess.value > randomNum) {
    returnVal1.innerText = "That's too high!";
  } else {
    returnVal1.innerText = "BOOM!";
    winnerName = player1Name.value;
    winningCard();
    numCorrectGuess();
    resetFields()
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
    winnerName = player2Name.value;
    winningCard();
    numCorrectGuess();
    resetFields()
  }
}

function numCorrectGuess(){
  var guessSpot = document.getElementById("guess-spot");
  guessSpot.innerText = guessHolder;
}

// js for min max range box1

function activateUpdateBtn() {
  if(minInput.value.length > 0 && maxInput.value.length > 0) {
    updateButton.disabled = false;
    rangeErrorMessage()
  } else {
      updateButton.disabled = true;
  }
}

function clearRangeNum(){
  minInput.value = "";
  maxInput.value = "";
}

function updateMinMax() {
  currentMinRange = minInput.value;
  currentMaxRange = maxInput.value;
  minNum.innerText = minInput.value;
  maxNum.innerText = maxInput.value;
  updateButton.disabled = true;
}

// custon range number js

updateButton.addEventListener("click", customRangeNumber)

function customRangeNumber(){
  min = parseInt(minInput.value);
  max = parseInt(maxInput.value);
  randomNum = Math.floor(Math.random() * (max - min)) + min;
  clearRangeNum();
}

// card pop up js

var closeButton = null

function winningCard() {
    var text = `<div class="game-card" id="challenger1-card">
    <section class="card-title">
      <p>challenger 1 name</p> <span id="vs">vs</span>
      <p>challenger 2 name</p>
    </section>
    <section class="challenger-winner">
      <h3 id="card-name">${winnerName}</h3>
      <p id="winner">winner</p>
    </section>
    <section class="card-stats">
      <p class="card-guess-num"><span id="guess-spot">0
        </span> guesses</p>
      <p class="card-time"><span>1</span> minute <span>35
      </span> second</p>
      <button class="close-card" id="close-button">X</button>
    </section>
  </div>`;
  column2.insertAdjacentHTML("afterbegin", text);
  closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", closeResultsCard);
}

function closeResultsCard(event){
  event.target.parentElement.parentElement.remove();
}

// js for reseting the fields

function resetFields() {
  player1Name.value = "";
  player2Name.value = "";
}

var errorMessageDiv = document.querySelector(".error-msg");

function rangeErrorMessage() {
  if (parseInt(maxInput.value) < parseInt(minInput.value)) {
    errorMessageDiv.innerHTML = `<img src="icon/error-icon.svg"><p id="errorMessage">Max must be higher than min</p>`;
    updateButton.disabled = true;
  }else {
    errorMessageDiv.innerHTML = " ";
    updateButton.disabled = false;
  }
}

// var submErrorMess = document.getElementById("ply1error");
// // submErrorMess.addEventListener("input", submitErrorMessage);
// submitButton.addEventListener("click", submitErrorMessage);
//
//
// function submitErrorMessage(){
//   console.log(player1Guess.value);
//   if (parseInt(player1Guess.value) < parseInt(currentMinRange)) {
//     submErrorMess.innerHTML = `<img src="icon/error-icon.svg"><p id="errorMessage">Guess must be higher than min</p>`;
//     submitButton.disabled = true;
//   } else {
//       submErrorMess.innerHTML = " ";
//       submitButton.disabled = false;
//     }
// }

// function submitErrorMessage() {
//   console.log("CRAP")
//   if(parseInt(player1Guess.value) < parseInt(minNum.value)) || (parseInt(player2Guess.value) < parseInt(minNum.value)) {
//     submitErrorMessage.innerHTML = `<img src="icon/error-icon.svg"><p id="errorMessage">Guess must be higher than min</p>`;
//     submitButton.disabled = true;
//   } else if(parseInt(player1Guess.value) > parseInt(maxNum.value) || (parseInt(player2Guess.value) > parseInt(maxNum.value)) {
//     submitErrorMessage.innerHTML = `<img src="icon/error-icon.svg"><p id="errorMessage">Guess must be lower than max</p>`;
//     submitButton.disabled = true;
//   } else {
//     submitErrorMessage.innerHTML = " ";
//     submitButton.disabled = false;
//   }
// }

// else if (parseInt(player2Guess.value) < parseInt(minNum.value)) {
//   submitErrorMessage.innerHTML = `<img src="icon/error-icon.svg"><p id="errorMessage">Guess must be higher than min</p>`;
//   submitButton.disabled = true;
// }
