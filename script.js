let firstNumber="";
let operator="";
let secondNumber="";
const digits=document.querySelectorAll(".digit");
const display=document.getElementById("display");
digits.forEach(function(button){
    button.addEventListener("click",function(){
        if (operator===""){ //means if no operator has been choosen yet
            firstNumber+=button.textContent;
            display.textContent=firstNumber;
        }else{
            secondNumber+=button.textContent; //means if the operator isn't empty anymore
            display.textContent=secondNumber;
        }
    });
});
const operators=document.querySelectorAll(".operator");
operators.forEach(function(button){
    button.addEventListener("click", function(){
       if(firstNumber===""){
        return;
    }
    if (firstNumber!=="" && operator!=="" && secondNumber!==""){ //if all three arre filled in
        const result=operate(operator,Number(firstNumber),Number(secondNumber));
    
    if(typeof result ==="string"){
        display.textContent=result;
        firstNumber="";
        operator="";
        secondNumber="";
        return;
    }
    firstNumber=result;
    secondNumber="";
    display.textContent=firstNumber;
}
        operator=button.textContent;
    });
});
const equals=document.getElementById("equals");
equals.addEventListener("click",function(){
    if(firstNumber==="" || operator==="" || secondNumber===""){
        return;
    }
    display.textContent=operate(operator,Number(firstNumber),Number(secondNumber));
    firstNumber="";
    operator="";
    secondNumber="";
});
const clear=document.getElementById("clear");
clear.addEventListener("click",function(){
    firstNumber="";
    operator="";
    secondNumber="";
    display.textContent=0;
})
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){
        return "Nice try, son!"
    }
    return Number((a/b).toFixed(4)) ;
}
function operate(operator,a,b){
    if (operator=="+"){
        return add(a,b);
    }else if (operator=="-"){
        return subtract(a,b);
    }else if(operator=="*"){
        return multiply(a,b);
    }else{
        return divide(a,b);
    }
}