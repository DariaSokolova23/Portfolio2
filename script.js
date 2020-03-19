let listenToYouDigit = document.getElementsByClassName('digit');
let listenToYouAction = document.getElementsByClassName('action');
let listenToEqually = document.getElementById('equally');
let listenToClear = document.getElementById('clear');
let listenToPoint = document.getElementById('point');
let output = document.getElementById('wc');
let calculation;
let operand1;
let check = false; // флаг означающий надо ли сбросить значение в выводе цифер

for (let i=0; i<listenToYouDigit.length; i++){
    listenToYouDigit[i].addEventListener('click', function(){
        if (check){
            output.value = 0; // приводим к состоянию когда циферки нормально набируются
            check = false; /// тут выключаем обратно, потому что надо чтобы снова набирались цифры
        }
        let digit = this.getAttribute('data-value');
        if (output.value === "0"){
            output.value = digit;
        }else{
            output.value += digit;
        }
    })
}

for (let i=0; i<listenToYouAction.length; i++){
    listenToYouAction[i].addEventListener('click', applyFunction);
}

function summ(a,b) {
    let c = a + b;
    return c;
}
function subtraction(a,b){
    let c = a - b;
    return c;
}
function multiplication(a,b){
    let c = a*b;
    return c;
}
function division(a,b){
    let c = a/b;
    return c;
}
function applyFunction(){
    operand1 = parseFloat(output.value);
    let action = this.getAttribute('data-value');
    if (action === 'sum'){
        calculation = summ;
    } 
    if (action === 'sub'){
        calculation = subtraction;
    }
    if (action === 'div'){
        calculation = division;
    }
    if (action === 'mul'){
        calculation = multiplication;
    }
    output.value = 0;    

}

function equallyFunction(){
    let operand2 = parseFloat(output.value);
    let result = calculation(operand1,operand2);
    output.value = result;
    operand1 = result;
    check = true; // говорим что при следующем нажатии цифры все скинулось
}

listenToPoint.addEventListener('click', function(){
    if (output.value.indexOf('.') === -1){
        output.value += '.';
    }    
})

listenToEqually.addEventListener('click', equallyFunction);
listenToClear.addEventListener('click',function(){
    operand1 = 0;
    output.value = 0;
})
