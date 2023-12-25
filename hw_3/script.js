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



