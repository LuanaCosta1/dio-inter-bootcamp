var incrementBtn = document.getElementById("incrementBtn");
var decrementBtn = document.getElementById("decrementBtn");

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

incrementBtn.addEventListener("click", function increment() {
  currentNumber += 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if(currentNumber < 0){
      currentNumberWrapper.style.color = "red";
  } else{
    currentNumberWrapper.style.color = "black";
  }
});

decrementBtn.addEventListener("click", function decrement() {
  currentNumber -= 1;
  currentNumberWrapper.innerHTML = currentNumber;
  
  if(currentNumber < 0){
      currentNumberWrapper.style.color = "red";
  } else{
    currentNumberWrapper.style.color = "black";
  }
});


