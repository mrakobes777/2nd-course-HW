// Задание 1
let answer = prompt("Введите пароль");
let password = "Hello";
if (answer === password) {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неверно");
}

// Задание 2
let c = prompt("Введите любое число");
if (c >= 0 && c <= 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// Задание 3

let d = prompt("Введите число");
let e = prompt("Введите число");
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// Задание 4

let a = "2";
let b = "3";
a = Number(a);
b = Number(b);
alert(a + b);

let month = prompt("Введите номер месяца");
month = Number(month);

switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("Зима");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default: 
    console.log("Неизвестный месяц");
  
}

console.log('Привет!')
console.log('Привет!')




