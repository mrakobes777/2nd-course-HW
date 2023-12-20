let a = 10
alert(a)

let year = 2007
alert(`Год выпуска первого iPhone - ${year}`)


let person = "Брендан Айк (Brendan Eigh)"
alert(`Создатель языка JavaScript - ${person} `)


let x = 10
let y = 2
alert(`Сумма = ${x + y}`)
alert(`Разность = ${x - y}`)
alert(`Произведение = ${x * y}`)
alert(`Частное = ${x / y}`)

let result = 2 ** 5
alert(result)

let var1 = 9
let var2 = 2
alert(var1 % var2)

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?')
alert(age)

const user = {

    name: 'Ildar',
    age: 54,
    isAdmin: false,

};
user.cityofResidence = 'Moscow';
user.age = 666;
delete user.cityofResidence;
let info = prompt('Какую информацию хотите узнать о пользователе?');
console.log(user[info]);
alert(user[info]);

let userName = prompt('Ваше имя?')
alert(`Привет ${userName} !`)