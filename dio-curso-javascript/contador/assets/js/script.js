var incrementBtn = document.getElementById("incrementBtn");
var decrementBtn = document.getElementById("decrementBtn");

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


function buttonsAlt(){
  if (currentNumber <= -10) {
    decrementBtn.style.display = "none";
    incrementBtn.style.display = "block";
  } else if (currentNumber >= 10) {
    incrementBtn.style.display = "none";
    decrementBtn.style.display = "block";
  } else if (currentNumber > -10 || currentNumber < 10) {
    incrementBtn.style.display = "block";
    decrementBtn.style.display = "block";
  }
}

function negColors(){
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "red";
  } else {
    currentNumberWrapper.style.color = "black";
  }
}


incrementBtn.addEventListener("click", function increment() {
  currentNumber++;
  currentNumberWrapper.innerHTML = currentNumber;

  buttonsAlt();
  negColors();
});

decrementBtn.addEventListener("click", function decrement() {
  currentNumber--;
  currentNumberWrapper.innerHTML = currentNumber;

  buttonsAlt();
  negColors();
});