const buttons = document.querySelectorAll('button')

let textInput = document.querySelector("input");

let massive = ['*' , '/' , '-' , '+']
let output = ''

function calculate(btwValue) {
    if (btwValue == '=' && output !="") {
        output = eval(output)
    }else if(btwValue == 'C'){
        output = ''
    }else if(btwValue == '+/-'){
        output = eval(output) * -1
    }else if(btwValue == 'DEL'){
        output = output.toString().slice(0 , -1)
    }
    else {
        if(massive.includes(btwValue) && massive.includes(output[output.length-1])){
            output = output.slice(0  , -1)+btwValue
        }else {output += btwValue}
    }
    textInput.value = output
}

buttons.forEach(button => {
    button.addEventListener('click' , (knopka) =>{
        console.log(knopka.target.dataset.value)
        calculate(knopka.target.dataset.value)
    })

});
