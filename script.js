function sum(a, b) {
    return +a + +b;
}

function substract(a, b) {
    return +a - +b;
}

function divide(a, b) {
    return +a / +b;
}

function multiply(a, b) {
    return +a * +b;
}

let numb1 = '';
let numb2 = '';
let operator = '';

function operate(numb1, numb2, operator) {
    let result = 0;
    switch(operator) {
        case '+': result = sum(numb1, numb2); break;
        case '-': result = substract(numb1, numb2); break;
        case '*': result = multiply(numb1, numb2); break;
        case '/': result = divide(numb1, num2); break;
    }
    return result;
}

const calculator = document.querySelector(".calculator");
const textDisplayElem = document.querySelector(".display p");

let textDisplayStor = '';

calculator.addEventListener("click", e => {
    let target = e.target;

    // matches the one of the buttons
    if (target.matches(".line div")) {
        // numb1 is null 
            // ? target.matches(oper) then error
            // : numb1 = target.textContent

        // numb1 isn't null && oper is null
            // oper? => operator = target.textContent
            // numb? => numb1 += target.textContent 

        // oper isn't null
            // oper? => operator = target.textContent
            // numb? => numb2 += target.textContent

        // numb2 isn't null
            // numb? => numb2 += target.textContent
            // oper? => operator = target.textContent
                // numb1 = target.textContent
                // numb2 = ''
            
        textDisplay.textContent += textDisplayStor;
    }
});