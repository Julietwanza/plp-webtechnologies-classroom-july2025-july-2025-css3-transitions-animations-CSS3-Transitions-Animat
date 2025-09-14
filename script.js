// === Part 2: Functions & Scope ===

// Global variable
let animationCount = 0;

// Function with parameters + return value
function calculateSquare(number) {
  return number * number;
}

// Function demonstrating local scope
function localScopeExample() {
  let localVar = "I'm local!";
  console.log(localVar);
}
localScopeExample();

// Reusable function to trigger animation
function triggerAnimation(elementId, animationClass) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add(animationClass);

    // remove class after animation ends
    element.addEventListener("animationend", () => {
      element.classList.remove(animationClass);
    });
  }
}

// === Part 3: Combine CSS & JS ===

// Animate box when button clicked
document.getElementById("animateBtn").addEventListener("click", () => {
  animationCount++;
  console.log(`Animation triggered ${animationCount} times`);
  const box = document.getElementById("animateBox");
  box.style.opacity = "1";
  box.style.animation = "bounce 1s ease";
  
  // Reset after animation
  setTimeout(() => {
    box.style.animation = "";
  }, 1000);
});

// Example: use calculation in animation
document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let inputLength = document.getElementById("message").value.length;
  alert(`Your message has ${calculateSquare(inputLength)} (squared) character units!`);
});
