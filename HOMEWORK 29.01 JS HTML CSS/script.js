const colorInput = document.getElementById("colorInput");

function SetItem() {
  const color = colorInput.value;
  sessionStorage.setItem("color", color);
}

function GetItem() {
  const GetColor = sessionStorage.getItem("color");
  document.body.style.backgroundColor = GetColor;
}

function Clear() {
  sessionStorage.removeItem("color");
  document.body.style.backgroundColor = "white"; 
  colorInput.value = ""; 
}

function SavedColor() {
  const savedColor = sessionStorage.getItem("color");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor; 
    colorInput.value = savedColor;
  } else {
    document.body.style.backgroundColor = "white";
  }
}
window.onload = SavedColor;
