
const input=document.querySelector('input');
const button=document.querySelector('button');
const fifty = 50;
const oneHundred = 100;
const five = 5;
const two = 2;

input.oninput = function inputValues(){
    let costSum = document.getElementById('cost').value;
    let cashSum = document.getElementById('cash').value;
    changeCalculator(costSum,cashSum);
}

button.onclick = function changeCalculator(costSum,cashSum) {
    const sum = costSum + cashSum; 
    console.log(sum);
    console.log('test');
}