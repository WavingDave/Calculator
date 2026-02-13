// 3.14159265359

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    let expression = display.value.replace(/π/g, Math.PI).replace(/%/g, "/100");

    display.value = Function('"use strict"; return (' + expression + ")")();
  } catch (error) {
    display.value = "False input";
  }
}

document.addEventListener("keydown", function (event) {
  if (!isNaN(event.key) || "+-*/.%".includes(event.key)) {
    appendToDisplay(event.key);
  }

  if (event.key === "Enter") {
    calculate();
  }

  if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  if (event.key === "Escape") {
    clearDisplay();
  }
});
