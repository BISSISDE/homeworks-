let attemps = 5;
let password;

while (attemps > 0) {
    password = prompt("Enter passsword")
    if (password == "amjilt_the_best") {
        alert("Welcome")
        console.log(`Welecome`);
        
        break;
    }else{
        attemps-- ;
        alert(`again attemps : ${attemps}` )
        console.log(`again attemps : ${attemps}`);
        
    }
    if (attemps == 0) {
        alert("To many attemps")
        console.log(`to many attemps`);
        break
    }
}