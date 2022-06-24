const operator = prompt('Enter operator (+, -, /, *): ');
const number1 = parseFloat(prompt('Enter a number: '));
const number2 = parseFloat(prompt('Enter another number: '))

let result;

if (operator == '+') {
 result = number1 + number2;
}
else if (operator == '-') {
 result = number1 - number2;
}
else if (operator == '/') {
 result = number1 / number2;
}
else if (operator == '*') {
 result = number1 * number2;
}

alert(`${number1} ${operator} ${number2} = ${result}`);