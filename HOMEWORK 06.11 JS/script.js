let welecome = alert(
  "Қош келдіңіз, саяхатшы! Сіз саяхатқа шыққалы жатырсыз. Сіздің таңдауыңыз - сіздің тағдырыңызды анықтайды."
);
let name = prompt("Есіміңізді енгізіңіз!");
let letsplay = alert(name + " ойынға қош келдіңіз!");
// 1 kadam
let step1 = prompt(
  "Сіз қиылыста тап боласыз. Сіз солға немесе оңға барасыз ба?"
);

if (step1 == "солға") {
  alert("Алдыңызда қауіп бар !!!  ");

  alert("Сізде 1попытка бар 🙌");
  step1 = prompt("Сіз қиылыста тап боласыз. Сіз солға немесе оңға барасыз ба?");
} else if (step1 == "оңға") {
  alert("Жолда қауіп жоқ! 👌 Алдыңызда өзен бар!");
}

// 2 kadam
let step2 = prompt(
  "Сіз өзенді көріп тұрсыз. Сіз салдың үстінен жүзесіз('жүзу') бе әлде 'қайық' жасайсыз ба?"
);

if (step2 == "жүземін" || step2 == "жүзу") {
  alert("Өкінішке орай ойын аяқталды .  Сіз жеңілдіңіз 👀 !");
} else if (step2 == "қайық") {
  alert("Керемет 👍 ! Сізде соңғы таңдау қалды !");
}

// 3 kadam
let step3 = prompt(
  "Сіз қазына сандығын таптыңыз. Сіз оны 'ашасыз'  немесе 'тиіспейсіз' ?"
);

if (step3 == "тиіспейсіз") {
  alert(
    "Whhyy Сізде соңғы таңдау болған. Cіз ашуыңыз керек еді. Жеңілдіңіз !!! 😐"
  );
} else if (step3 == "ашасыз" || step3 == "ашу" || step3 == "ашамын") {
  alert(" Құттықтаймыз , " + name +" сіз жасырын қазынаны таптыңыз! 🤩");

  alert("Соңы!");
}
