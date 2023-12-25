// Задание 1
let password = "Ildar";
let answer = prompt("Введите пароль");

if (answer === "Ildar") {
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

let month = String(prompt("Введите номер месяца"));
month = Number(month);

switch (month) {
  case 1:
    console.log("Зима");
    break;

  case 2:
    console.log("Зима");
    break;

  case 3:
    console.log("Весна");
    break;

  case 4:
    console.log("Весна");
    break;

  case 5:
    console.log("Весна");
    break;

  case 6:
    console.log("Лето");
    break;

  case 7:
    console.log("Лето");
    break;

  case 8:
    console.log("Лето");
    break;

  case 9:
    console.log("Осень");
    break;

  case 10:
    console.log("Осень");
    break;

  case 11:
    console.log("Осень");
    break;

  case 12:
    console.log("Зима");
    break;
}
if (month > 12) {
  console.log("Нет такого месяца");
}
