const screen = document.querySelector("#screenText");
const button = document.querySelector(".buttons");

let a = "";
let b = "";
let operator;
let enterB = false;
let dot = true;



button.addEventListener('click', (event) => {
    const { target } = event;
    console.log(target.value);
    if (!target.matches('button')) return; 

    if (target.classList.contains('operational')) {
        screen.textContent = "";

        if (enterB && b != ""){
            calculate();
        }
        operator = target.value;
        enterB=true;
        
        if (operator === "√"){
            a = Math.sqrt(a);
            screen.textContent = a;
            enterB=false;
            return;
        } 
        
        
        if (operator === "CE"){
            a = '';
            b = '';
            operator='';
            screen.textContent = '';
            enterB=false;
            return;
        }

        

    
    

    
    }else if (target.value === '=') {
        calculate();
        enterB=false;
    } else {
        if (target.value === ".") {
            if (!enterB && a.includes(".")) return;
            if (enterB && b.includes(".")) return;
        }
        if (!enterB){
            a += target.value;
            screen.textContent = a;
        }else{
            b += target.value;
            screen.textContent = b;
        }
    }
});

function calculate(){
    if (a === "" || b ==="" || operator === "") return;
    const result = operate(operator,a,b);
    if (result === null){
        a = "";
        b = "";
        operator = "";
        return;
    }
    a=parseFloat(result.toPrecision(10));
    b="";
    operator="";
    screen.textContent = a;

}




function operate(operator, a, b){
    let result;
    switch (operator){
        case "√":
            result = Math.sqrt(Number(a));
            break;
        case "%":
            result = Number(a) % Number(b);
            break;
        case "÷":
            if (Number(b) === 0){
                result = null;
                return;
            }
            result = Number(a) / Number(b);
            break;
        case "×":
            result = Number(a) * Number(b);
            break;
        case "-":
            result = Number(a) - Number(b);
            break;
        case "+":
            result = Number(a) + Number(b);
            break;
    }
    return result;
}

