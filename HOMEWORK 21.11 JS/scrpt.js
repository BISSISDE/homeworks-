const Order = () => {
  let orderFood;
  let total;
  let yourcash;
  let valuta;

  while (yourcash !== "stop") {
    while (true) {
      let orderFood = prompt(
        "Enter the foods \n Пицца : 20 USD \n Суши : 10 USD \n Кофe :  5 USD \n Фри : 15 USD "
      );
      if (orderFood == "stop") break;
      total = 0;
      if (orderFood == "Пицца") {
        total += 20;
      } else if (orderFood == "Суши") {
        total += 10;
      } else if (orderFood == "Кофе") {
        total += 5;
      } else if (orderFood == "Фри") {
        total += 15;
      }
    }
    valuta = prompt(" Enter valute USD / KZT / CNY");
    yourcash = +prompt("Enter your money");
    if (valuta == "USD") {
      total
      return total
    } else if (valuta == "KZT") {
      total *= 500;
      return total
    } else if (valuta == "CNY") {
      total *= 68;
      return total
    }
  }
  return total
};

alert(Order());
