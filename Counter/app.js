let display = document.getElementById('display');

let btnDecrease = document.getElementById('btn-decrease');
let btnReset = document.getElementById('btn-reset');
let btnIncrease = document.getElementById('btn-increase');

display.innerHTML = '0';
const decrease = () => {
    const value = Number(display.innerHTML);
    display.innerHTML = value-1;
    if(display.innerHTML < 0){
        display.style.color = 'red';
    }
}
const reset = () => {
    display.innerHTML = '0';
    display.style.color = 'black';
}
const increase = () => {
    const value = Number(display.innerHTML);
    display.innerHTML = value+1;
    if(display.innerHTML > 0){
        display.style.color = 'green';
    }
}

btnDecrease.addEventListener('click', decrease);
btnReset.addEventListener('click', reset);
btnIncrease.addEventListener('click', increase);