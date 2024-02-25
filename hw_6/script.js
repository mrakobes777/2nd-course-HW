// Задание 1

function askMin(a, b) {
  return a < b ? a : b;
}

// Задание 2
function checkParity(num) {
  if (num % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}

// Задание 3.1
function showSquare(num) {
  console.log(num * num);
}

// Задание 3.2
function getSquare(params) {
  return num * num;
}

// Задание 4
function helloUser() {
  let age = prompt("Сколько вам лет?");
  if (age < 0) {
    console.log("Вы ввели неправильное значение");
  } else if (age <= 12) {
    console.log("Привет друг!");
  } else {
    console.log("Добро пожаловать!");
  }
}

// Задание 5

function multNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
}

// Задание 6

function cubeNumber() {
  let num = prompt("Введите число");
  num = Number(num);
  if (isNaN(num)) {
    return "Переданный параметр не является числом";
  } else {
    return `${num} в кубе равно ${num ** 3}`;
  }
}
console.log(cubeNumber());

// Задание 7

function getArea() {
  return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
  return 2 * Math.PI * this.radius;
}

const circle1 = {
  radius: 5,
  getArea,
  getPerimeter
};

const circle2 = {
  radius: 10,
  getArea,
  getPerimeter
};

// Задание 8

function getSeason(month) {
  if (month >= 3 && month <= 5) {
    return "Весна";
  } else if (month >= 6 && month <= 8) {
    return "Лето";
  } else if (month >= 8 && month <= 11) {
    return "Осень";
  } else if (month == 12 || month == 1 || month == 2) {
    return "Зима";
  } else {
    return "Неизвестное значение";
  }
}
console.log(getSeason(prompt("Введите число")));