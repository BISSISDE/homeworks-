// task1
let a = parseInt(prompt("Бірінші қабырға санын енгіз:"));
let b = parseInt(prompt("Екінші қабырға санын енгіз:"));
let c = parseInt(prompt("Үшінші қабырға санын енгіз:"));

if (a + b > c && a + c > b && b + c > a) {
  alert("Бұл үшбұрыш жасай алады");
} else {
  alert("Бұл үшбұрыш жасай алмайды");
}

// task3
let grade = prompt("0-ден 100-ге дейін ұпай енгізіңіз:");

if (grade >= 0 && grade <= 59) {
  alert("Баға: F");
}
if (grade >= 60 && grade <= 69) {
  alert("Баға: D");
}
if (grade >= 70 && grade <= 79) {
  alert("Баға: C");
}
if (grade >= 80 && grade <= 89) {
  alert("Баға: B");
}
if (grade >= 90 && grade <= 100) {
  alert("Баға: A");
}
