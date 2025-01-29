const colorInput = document.getElementById("colorInput");

function SetItem() {
  const color = colorInput.value;
  sessionStorage.setItem("color", color);
}
SetItem();
function GetItem() {
  const GetColor = sessionStorage.getItem("color");
  document.body.style.backgroundColor = colorInput.value;
}
function Clear() {
  sessionStorage.removeItem("color");
  document.body.style.backgroundColor = "white";
  colorInput.value = "";
}
