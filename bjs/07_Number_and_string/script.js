let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');



document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})


document.querySelector('#btn_subtruct').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'subtruct';
    inputWindow.value = '';
})

document.querySelector('#btn_multiply').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'multiply';
    inputWindow.value = '';
})

document.querySelector('#btn_division').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'division';
    inputWindow.value = '';
})

document.querySelector('#btn_root').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'root';
    inputWindow.value = '';
})


document.querySelector('#btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand  + parseInt(inputWindow.value);
        operation = null;
        inputWindow.value = result;
        lastOperand = 0;
    }

    else if (operation === 'subtruct') {
        const result = lastOperand  - parseInt(inputWindow.value);
        operation = null;
        inputWindow.value = result;
        lastOperand = 0;
    }

    else if (operation === 'multiply') {
        const result = lastOperand  * parseInt(inputWindow.value);
        operation = null;
        inputWindow.value = result;
        lastOperand = 0;
    }

    else if (operation === 'division') {
        const result = lastOperand  / parseInt(inputWindow.value);
        operation = null;
        inputWindow.value = result;
        lastOperand = 0;
    }

    else if (operation === 'root') {
        const result = Math. sqrt(lastOperand);
        operation = null;
        inputWindow.value = result;
        lastOperand = 0;
    }
})

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

