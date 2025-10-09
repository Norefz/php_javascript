const display = document.getElementById("screen");
function CalcDisplay(input) {
  display.value += input;
}
function ClearDisplay (input) {
  display.value ="";
}
function Calculate() {
  try {
  display.value = eval(display.value);
  } catch (error) {
    display.value= "Error";
    
  }
}
