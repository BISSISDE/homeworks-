function game() {
  const san = 45;
  let findNum = +prompt("Find the num");

  while (findNum !== san) {
    if (findNum > san) {
      alert("engizgen san ylken");
      findNum = +prompt("Find the num");
    } else if (findNum < san) {
      alert("engizilgen san kishi");
      findNum = +prompt("Find the num");
    }
  }
  if (findNum == san) {
    alert("San tabuldi");
  }
}
console.log(game());
