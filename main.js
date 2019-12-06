var submitBtn = document.querySelector('.submit-btn');
var nameInput = document.querySelector('#name-field');
var guessInput = document.querySelector('#guess-field');
var nameInput2 = document.querySelector('#name-field2');
var guessInput2 = document.querySelector('#guess-field2');


nameInput.addEventListener('input', enableButton);
guessInput.addEventListener('input', enableButton);
nameInput2.addEventListener('input', enableButton);
guessInput2.addEventListener('input', enableButton);

function enableButton() {

  if (nameInput.value !='' && guessInput.value !='' && nameInput2.value !='' && guessInput2.value !='') {
    console.log("shit");
    submitBtn.removeAttribute('disabled');
  }
  else {
    submitBtn.disabled = true;
  }
}
