let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');

    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    numbers.push(input);
} while (input !== null);

if (numbers.length) {
    for (const elements of numbers) {
        total += Number(elements);
    }
}

alert(`Общая сумма чисел равна ${total}`);