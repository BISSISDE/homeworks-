// //task1 

let num = 1;
while (num <= 15) {
  if (num % 2 === 0) {
    num++;
    continue;
  } else if (num % 5 === 0 && num % 3 === 0 ) {
    console.log("FizzBuzz " + num);
  } else if (num % 3 === 0) {
    console.log("Fizz " + num);
  } else if (num % 5 === 0) {
    console.log("Buzz " + num);
  } else {
    console.log(num);
  }

  num++;
}

// // task2

let enter;
let score = 18;
do {
  enter = parseInt(prompt("Adam kansha sagat yikagany durus?"));
  score--;
} while (enter !== 8);
do {
  enter = parseInt(prompt("22+8=?"));
  score--;
} while (enter !== 30);

do {
  enter = parseInt(prompt("12/2=?"));
  score--;
} while (enter !== 6);

alert(score + " балл");
console.log(enter);

// task3

let start = parseInt(prompt("Бірінші сан енгіз:"));
let end = parseInt(prompt("Екінші ссан енгіз:"));
let i = start;

var num4 = 1;
var num7 = 1;
var barma4;
var barma7;

do {
    if (i % 4 == 0) {
        num4 *= i;
        barma4 = true;
    }
    if (i % 7 == 0) {
        num7 *= i;
        barma7 = true;
    }
    i++;
} while (i <= end);

if (barma4) {
    console.log("4-ке қалдықсыз бөлінетін сандар көбейтіндісі:" + num4);
} else {
    console.log("4-ке қалдықсыз бөлінетін сандар жоқ.");
}

if (barma7) {
    console.log("7-ге қалдықсыз бөлінетін сандар көбейтіндісі:" + num7 );
} else {
    console.log("7-ге қалдықсыз бөлінетін сандар жоқ.");
}
