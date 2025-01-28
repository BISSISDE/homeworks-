const task = document.getElementById("Task");
const check = document.getElementById("Check");
function SetItem() {
  const taskV = task.value;
  if (taskV) {
    localStorage.setItem("task", taskV);
    check.textContent = "Saved!";
    check.style.color = "green";
  } else {
    alert("Write again");
  }
}
function GetItem() {
  const taskG = localStorage.getItem("task");
  if (taskG) {
    task.textContent = taskG;
  }
}
GetItem();
function Clear() {
  task.value = "";
  localStorage.removeItem("task");
  check.textContent = "Cleared!";
  check.style.color = "red";
}
