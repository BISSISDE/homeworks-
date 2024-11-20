const Findlenght = () => {
  let num;
  let length;
  let result = 0;

  while (num != "0") {
    num = +prompt("Enter num");
    if (num == "0") break;
    length = prompt("Enter the type of lenght");
    if (length == "m") {
      result += num;
    }
    if (length == "dm") {
      result += num * 10;
    }
    if (length == "km") {
      result += num * 1000;
    }
  }
  return result;
};
alert(Findlenght());
console.log(Findlenght());
