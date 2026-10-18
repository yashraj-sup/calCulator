
let firstNumber="";
let operator="";
let secondNumber="";
const digits=document.querySelectorAll(".digit");
const display=document.getElementById("display");
function inputDigit(value){
    let pressed=value;
    const current=operator===""?firstNumber:secondNumber;
    if(pressed==="." && current.includes(".")){
        return;
    }
    if(pressed==="." && current===""){
        pressed="0.";
    }
    if(operator===""){
        firstNumber+=pressed;
        display.textContent=firstNumber;
    }else{
        secondNumber+=pressed;
        display.textContent=secondNumber;
    }
}
digits.forEach(function(button){
    button.addEventListener("click",function(){
        inputDigit(button.textContent);
    });
});
document.addEventListener("keydown",function(event){
    if("0123456789.".includes(event.key)){
        inputDigit(event.key);
    }
    if("+-*/".includes(event.key)){
        chooseOperator(event.key);
    }
});
function chooseOperator(symbol){
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
};
        operator=symbol;
};
const operators=document.querySelectorAll(".operator");
operators.forEach(function(button){
    button.addEventListener("click", function(){
        chooseOperator(button.textContent);
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
});
const backspace=document.getElementById("backspace");
backspace.addEventListener("click",function(){
  if(operator===""){
    firstNumber=firstNumber.slice(0,-1);
    display.textContent=firstNumber || "0";
  }  else{
    secondNumber=secondNumber.slice(0,-1);
    display.textContent=secondNumber || "0";
  };
});

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
    let result;
    if (operator=="+"){
        result= add(a,b);
    }else if (operator=="-"){
        result= subtract(a,b);
    }else if(operator=="*"){
        result=multiply(a,b);
    }else if(operator=="/"){
        result= divide(a,b);
    }
    if(typeof result==="number"){
        result=Number(result.toFixed(4));
    }
    return result;
}