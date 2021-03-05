const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counterValue = document.getElementById("counter-value");

let counter;

// Initialize Counter Variable and its value
const init = () => {
  counter = 0;
  counterValue.style.color = "black";
  counterValue.textContent = counter;
};

const counterValueCheck = () => {
  if (counter === 0) counterValue.style.color = "black";
  else if (counter > 0) counterValue.style.color = "green";
  else counterValue.style.color = "red";
};

// Event Listeners
reset.addEventListener("click", init);

increase.addEventListener("click", () => {
  // Increase the counter variable
  counter++;

  // check if the counter variable is greater than 0
  counterValueCheck();

  // Display the current counter variable
  counterValue.textContent = counter;
});

decrease.addEventListener("click", () => {
  // Decrease the counter variable
  counter--;

  // Check if the counter is less than 0
  counterValueCheck();

  // Display the current counter variable
  counterValue.textContent = counter;
});

init();
