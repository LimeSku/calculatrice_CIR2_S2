

function addNumber(object, val){
    object.digits.value += val;
}

function calc(object){
    object.digits.value=eval(object.digits.value);
}

function clearDigits(object){
    object.digits.value = " ";
}