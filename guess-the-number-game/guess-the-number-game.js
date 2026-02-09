let number = 0;

const guessBtn = document.querySelector("#guess-btn");
const numberInput = document.querySelector("#number-input");
const displayEl = document.querySelector("#display");

guessBtn.addEventListener("click", game);

function game() {
  if (numberInput.value === '') {
    alert("Please choose your number 🥺");
    return;
  } else if (numberInput.value < 0) {
    alert("Your number is less than 0. ⚠️");
  } else if (numberInput.value > 9) {
    alert("Your number is greater than 9. ⚠️");
  } else {
    number = randomNumber();
    displayEl.textContent = number == numberInput.value ? "You Won 🏆" : "You Lost 🏆";
    displayEl.textContent += number + "-------" + numberInput.value;
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function checkRange() {

  let temp = randomNumber();
  let min = temp;
  let max = temp;

  for (let i=0; i<50; i++) {
    temp = randomNumber();
    if (temp <= min) {
      min = temp;
    } else if (temp >= max) {
      max = temp;
    }
  }
  alert("Min: " + min + " Max: " + max);
}