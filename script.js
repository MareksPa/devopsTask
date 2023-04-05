// get the button elements
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

// add event listeners to the buttons
button1.addEventListener("click", function () {
  showMessage("Red button was clicked");
});
button2.addEventListener("click", function () {
  showMessage("Blue button was clicked");
});
button3.addEventListener("click", function () {
  showMessage("Yellow button was clicked");
});
button4.addEventListener("click", function () {
  showMessage("Green button was clicked");
});

let clickCount = 0; // initialize the click count variable
const buttonElements = document.getElementsByClassName("button");
const clickCountSpan = document.getElementById("clickCount");
for (let i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener("click", function () {
    clickCount++; // increment the click count variable
    clickCountSpan.innerText = clickCount; // update the click count display
  });
}
// function to show a message when a button is clicked
function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
}
