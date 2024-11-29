let numbers = [];    // массив для хранения введенных чисел

// функция для добавления числа в массив
function addNumber(number) {
    if (number === 0) {      // завершение ввода
        document.getElementById('calculateButton').style.display = 'block';
        return;
    }

    if (!isNaN(number) && number !== 0) {
        numbers.push(number);    // добавляем элемент number в конец массива
    }
    updateArrayOutput(numbers);   // передаем массив в updateArrayOutput
}

// функция для обновления вывода массива
function updateArrayOutput(array) {
    const arrayOutput = document.getElementById('arrayOutput');
    arrayOutput.textContent = `Введённый массив чисел: [${array.join(', ')}]`;
}

// функция для вычисления количества отрицательных нечётных чисел
function calculateNegativeOddCount(array) {
    let negativeOddCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 && array[i] % 2 !== 0) {
            negativeOddCount++;
        }
    }
    document.getElementById('output').textContent = `Количество отрицательных нечётных чисел: ${negativeOddCount}`;
}

// обработчик события для получения числа из поля ввода и передачи его в addNumber
document.getElementById('addButton').onclick = function() {
    const input = document.getElementById('inputNumber');
    const number = parseInt(input.value);
    input.value = '';   // очистка поля ввода
    addNumber(number);
};

// событие для расчета количества отрицательных нечётных чисел
document.getElementById('calculateButton').onclick = function() {
    calculateNegativeOddCount(numbers);    // передаем массив в calculateNegativeOddCount
};

