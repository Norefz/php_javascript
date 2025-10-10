const display = document.getElementById("screen");
function CalcDisplay(input) {
  display.value += input;
  newSize = 60;
  display.style.fontSize = `${newSize}px`;

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
function DeleteDisplay() {
  display.value = display.value.slice(0,-1);
  
}
