'use strict';

const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

const swapBtn = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F';
        two.textContent = '°C';
        result.textContent = '';
    } else {
        one.textContent = '°C';
        two.textContent = '°F';
        result.textContent = '';
    }

}

const calcF = () => {
    const firenhit = converter.value * 1.8 + 32;
    result.textContent = `${converter.value}°C to = ${firenhit.toFixed(1)}°F`;
    converter.value = '';
}

const calcC = () => {
    const celcius = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value}°F to = ${celcius.toFixed(1)}°C`;
    converter.value = '';
}

const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent == '°C') {
            calcF()
        } else {
            calcC()
        }
    } else {
        result.textContent = 'Podaj wartość';
    }
}

const reset = () => {
    converter.value = '';
    result.textContent = ''
}

changeBtn.addEventListener('click', swapBtn);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset)
