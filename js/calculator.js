// Variablat
const input = document.querySelector('#input');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const dot = document.querySelector('#dot')
const total = document.querySelector('#total')
const modulus = document.querySelector('#modulus')
const sum = document.querySelector('#sum');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const n4 = document.querySelector('#n4');
const n5 = document.querySelector('#n5');
const n6 = document.querySelector('#n6');
const n7 = document.querySelector('#n7');
const n8 = document.querySelector('#n8');
const n9 = document.querySelector('#n9');
const n0 = document.querySelector('#n0');
const calculator_view = document.querySelector('.calculator');
const calculator = document.querySelector('.calculator');
const show_calculator = document.querySelector('#calculator-icon');
const weather = document.querySelector('.weather');
const weather_btn = document.querySelector('#weather-btn');

const time = document.querySelector('#time');
const date = document.querySelector('#date');
const pad_key = document.querySelector('.pad-key');
// Variablat

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
// Calculator Keyboard Input

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
            if (input.innerHTML == '0' && input.innerHTML == '%') {
                console.log("d");
            }
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
// Keybinds Listener Input


// Show / Hide Caclulator
show_calculator.addEventListener('click', () => {
    if (!calculator_view.classList.contains('show')) {
        calculator_view.classList.add('show')
    } else calculator_view.classList.remove('show');
    calculator_view.classList.add('cal-sizes')
})
// Show / Hide Caclulator

    (function (elementSelector) {
        var direkcioniX, direkcioniY, objInitLeft, objInitTop;
        var inDrag = false;
        var dragTarget = document.querySelector(elementSelector);
        dragTarget.addEventListener("mousedown", function (e) {
            inDrag = true;
            objInitLeft = dragTarget.offsetLeft;
            objInitTop = dragTarget.offsetTop;
            direkcioniX = e.pageX; direkcioniY = e.pageY;
        });
        document.addEventListener("mousemove", function (e) {
            if (!inDrag) {return;}
            dragTarget.style.left = (objInitLeft + e.pageX - direkcioniX) + "px";
            dragTarget.style.top = (objInitTop + e.pageY - direkcioniY) + "px";
        });
        document.addEventListener("mouseup", function (e) {inDrag = false;});
    }("#calculator"));