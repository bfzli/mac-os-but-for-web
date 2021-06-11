// Variables
const input = document.querySelector('#input'),
    clear = document.querySelector('#clear'),
    backspace = document.querySelector('#backspace'),
    plus = document.querySelector('#plus'),
    minus = document.querySelector('#minus'),
    multiply = document.querySelector('#multiply'),
    divide = document.querySelector('#divide'),
    dot = document.querySelector('#dot'),
    total = document.querySelector('#total'),
    modulus = document.querySelector('#modulus'),
    sum = document.querySelector('#sum'),
    n1 = document.querySelector('#n1'),
    n2 = document.querySelector('#n2'),
    n3 = document.querySelector('#n3'),
    n4 = document.querySelector('#n4'),
    n5 = document.querySelector('#n5'),
    n6 = document.querySelector('#n6'),
    n7 = document.querySelector('#n7'),
    n8 = document.querySelector('#n8'),
    n9 = document.querySelector('#n9'),
    n0 = document.querySelector('#n0'),
    calculator_view = document.querySelector('.calculator'),
    calculator = document.querySelector('.calculator'),
    show_calculator = document.querySelector('#calculator-icon'),
    weather = document.querySelector('.weather'),
    weather_btn = document.querySelector('#weather-btn'),
    time = document.querySelector('#time'),
    date = document.querySelector('#date'),
    pad_key = document.querySelector('.pad-key');

// Show & Hide Caclulator
show_calculator.addEventListener('click', () => {
    if (!calculator_view.classList.contains('show')) {
        calculator_view.classList.add('show')
    } else calculator_view.classList.remove('show');
})


// Calculator Keyboard Input
n1.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '1';
})
n2.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '2';
})
n3.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '3';
})
n4.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '4';
})
n5.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '5';
})
n6.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '6';
})
n7.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '7';
})
n8.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '8';
})
n9.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '9';
})
n0.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '0';
})
plus.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += ' + ';
})
minus.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += ' - ';
})
divide.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += ' / ';
})
multiply.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += ' * ';
})
modulus.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += ' % ';
})
sum.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML = eval(input.textContent);
})
dot.addEventListener('click', () => {
    if (input.innerHTML == '0') input.innerHTML = '';
    input.innerHTML += '.';
})
clear.addEventListener('click', () => {
    input.innerHTML = '0';
})
backspace.addEventListener('click', () => {
    if (input.innerHTML != '0') {
        var clear_number = document.getElementById("input").innerText;
        input.innerHTML = clear_number.slice(0, -1);
    }
    if (input.innerHTML == 0) {
        input.innerHTML = '0';
    }
})

// Keybinds Listener Input
window.addEventListener('keydown', (keypressed) => {
    switch (keypressed.key) {
        case '1':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '1';
            break;
        case '2':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '2';
            break;
        case '3':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '3';
            break;
        case '4':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '4';
            break;
        case '5':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '5';
            break;
        case '6':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '6';
            break;
        case '7':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '7';
            break;
        case '8':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '8';
            break;
        case '9':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '9';
            break;
        case '0':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '0';
            break;
        case '+':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += ' + ';
            break;
        case '-':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += ' - ';
            break;
        case '*':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += ' * ';
            break;
        case 'x':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += ' * ';
            break;
        case '.':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += '.';
            break;
        case '/':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML += ' / ';
            break;
        case '%':
            if (input.innerHTML == '0') input.innerHTML = '';
            break;
        case '=':
        case 'Enter':
            if (input.innerHTML == '0') input.innerHTML = '';
            input.innerHTML = eval(input.textContent);
            break;
        case 'Del':
        case 'Delete':
            input.innerHTML = '0';
            break;
        case 'Backspace':
            if (input.innerHTML != '0') {
                var x = document.getElementById("input").innerText;
                input.innerHTML = x.slice(0, -1);
            }
            if (input.innerHTML == 0) {
                input.innerHTML = '0';
            }
            break;
    }
});