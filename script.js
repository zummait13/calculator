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

function roundNumb (numb) {
    const BILLION = 1000000000;
    if (numb>BILLION) numb = numb.toExponential(4);
    else +numb.toFixed(8);
    return numb;
}

function operate(numb1, numb2, operator) {
    let result = 0;
    switch(operator) {
        case '+': result = sum(numb1, numb2); break;
        case '-': result = substract(numb1, numb2); break;
        case '*': result = multiply(numb1, numb2); break;
        case '/': result = divide(numb1, numb2); break;
    }
    return roundNumb(result);
}

let numb1 = '';
let numb2 = '';
let operator = '';
let textDisplayStor = '';

const calculator = document.querySelector(".calculator");
const textDisplayElem = document.querySelector(".display p");

calculator.addEventListener("click", e => {
    let target = e.target;

    // matches the one of the buttons
    if (target.matches(".line div")) {

        if (target.matches(".erase")) {
            numb1 = '';
            numb2 = '';
            operator = '';
            textDisplayStor = '';
        }
        
        else if (numb1 == '') {
            if (target.matches(".oper")) alert("Type number");
            else if (target.matches(".numb")) {
                numb1 = target.textContent;
                textDisplayStor = target.textContent;
            }
        } 

        else if (numb1 != '' && operator == '') {
            if (target.matches(".backspace")) {
                backspace(numb1);
            }

            else if (target.matches(".oper")) {
                operator = target.textContent;
                textDisplayStor += target.textContent;
            }
            else if (target.matches(".numb")) {
                numb1 += target.textContent;
                textDisplayStor += target.textContent;
            }
        }

        else if (operator != '' && numb2 == '') {
            if (target.matches(".backspace")) {
                backspace(operator);
            }

            else if (target.matches(".oper")) {
                // replace operator
                operator = target.textContent;
                textDisplayStor = textDisplayStor.slice(0, -1) + target.textContent;
            }
            else if(target.matches(".numb")) {
                numb2 = target.textContent;
                textDisplayStor += target.textContent;
            }
        }

        else if (numb2 != '') {
            if (target.matches(".backspace")) {
                backspace(numb2);
            }

            else if (target.matches(".numb")) {
                numb2 += target.textContent;
                textDisplayStor += target.textContent;
            }
            else if (target.matches(".oper")) {
                // operate and set the new expression
                numb1 = operate(numb1, numb2, operator);
                numb2 = '';
                operator = target.textContent;
                textDisplayStor = '='+numb1+operator;
            }
            else if (target.matches(".operate")) {
                numb1 = operate(numb1, numb2, operator);
                numb2 = '';
                operator = '';
                textDisplayStor = numb1;
            }
        }

        textDisplayElem.textContent = textDisplayStor;
    }
});

function backspace (val) {
    val = val.slice(0, -1);
    textDisplayStor = textDisplayStor.slice(0, -1);
}