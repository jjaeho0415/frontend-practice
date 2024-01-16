const display = document.getElementById('display');

let num1 = '';
let operator = '';
let num2 = '';


function appendNumber(number){
    if(operator === ''){
        if(display.value === '0'){
            display.value = '';
        }
        num1 += number;
    }
    else{
        num2 += number;
    }
    display.value += number;
}

function addOperation(operation){
    if(num1 !== '' && num2 === ''){
        operator = operation;
        display.value += operator;
    }
}

function calculate(){
    let result;
    if(num1 !== '' && num2 !== ''){
        if(operator === '+'){
            result = parseInt(num1) + parseInt(num2)
        }
        else if(operator === '-'){
            result = parseInt(num1) - parseInt(num2)
        }
        else if(operator === 'x'){
            result = parseInt(num1) * parseInt(num2)
        }
        else if(operator === '/'){
            result = parseInt(num1) / parseInt(num2)
        }
        display.value = String(result);
        num1 = result;
        operator = '';
        num2 = '';
    }
}

function clearDisplay(){
    num1 = '';
    num2 = '';
    operator = '';
    display.value = '0';
}