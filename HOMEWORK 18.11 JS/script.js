let num = +(prompt("Enter one num"))
function JupOrTak() {
    if (num % 2 == 0){
        return "jup"
    }else {
        return "tak"
    }
}
alert(JupOrTak() + " - " + num);
console.log(JupOrTak() + " - " + num);
