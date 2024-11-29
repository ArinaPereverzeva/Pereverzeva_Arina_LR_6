function n(x) {
    if (x > 0) {
        return 0;
    } else {
        return 1;
    }
}

const inputValues = document.getElementById('inputValues');            // кнопка ввода
const calculateButton = document.getElementById('calculateButton');    // кнопка подсчета
const outputDiv = document.getElementById('output');                   // поле для вывода результата

// добавляем обработчик события для кнопки подсчета
calculateButton.onclick = function() {
    const values = inputValues.value.split(' ');   // получаем введенные значения и разбиваем их на массив
    
    // убедимся, что введено ровно три значения
    if (values.length !== 3) {
        outputDiv.textContent = 'Пожалуйста, введи ровно три значения (через пробел).';
        return;  // завершение функции, если данные введены не корректно
    }

    // преобразуем значения в числа
    const A = parseFloat(values[0]);
    const B = parseFloat(values[1]);
    const C = parseFloat(values[2]);

    // проверка на корректность введенных данных
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        outputDiv.textContent = 'Пожалуйста, введи числовые значения.';
        return;  // завершение функции, если данные введены не корректно
    }
    
    const result = n(A) + n(B) + n(C);
    outputDiv.textContent = 'n(A) + n(B) + n(C) = ' + result; // вывод результата
};

