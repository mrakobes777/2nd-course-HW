//Задание 1

let n = 0;
while (n < 2) {
  console.log("Привет");
  n++;
}

let i = 1;

//Задание 2

while (i <= 5) {
  console.log(i);

  i++;
}

//Задание 3

let f = 7;

while (f <= 22) {
  console.log(f);
  f++;
}

// Задание 4

const salary = {
  Коля: 200,
  Вася: 300,
  Петя: 400
};

for (let name in salary) {
  console.log(`${name} - зарплата ${salary[name]}`);
}

// Задание 5

let number = 1000;
let num = 0;

while (number >= 50) {
  number /= 2;
  num++;
}
console.log(`Получилось число ${number}. Количество итераций равно ${num}`);

// Задание 6

let day = 5;
for (let i = day; i <= 31; i += 7) {
  console.log(`Сегодня пятница, ${i} число. Необходимо подготовить отчет!!!`);
}
