// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
const a = 7, b = 9;
console.log(a * b);

// 	Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
const c = 7, d = 9;
console.log(c / 9);

// 	Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
const e = 3, f = 5;
console.log(e + f);
// 	Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
const e1 = '3', f1 = 5;
console.log(e1 + f1);
// 	Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
const e2 = 3, f2 = 0;
console.log(e2 / f2);
// 	Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
const e3 = 3, f3 = 'Hello';
console.log(e3 + f3);

// 	Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.

const e4 = 3, f4 = 'Hello';
console.log(e4 * f4);
// 	Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
const inInput = document.querySelector('.inEnter');
const button = document.querySelector('button');
button.onclick = function () {
	console.log(inInput.value);
}

// 	Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
const inInput2 = document.querySelector('.inEnter2');
const button2 = document.querySelector('.buClick2');
button2.onclick = function () {
	console.log(inInput2.value);
	inInput2.value = '';
}

// 	Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
const inInput3 = document.querySelector('.inEnter3');
const button3 = document.querySelector('.buClick3');
button3.onclick = function () {
	console.log(inInput3.value * 10);
}

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
const inInput11 = document.querySelector('.inEnter11');
const button11 = document.querySelector('.buClick11');
button11.onclick = function () {
	console.log(parseInt(inInput11.value) + 10);
};

// Task 12.
// Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
const inInput12 = document.querySelector('.inEnter12'), inInput121 = document.querySelector('.inEnter121');
const button12 = document.querySelector('.buClick12');
button12.onclick = function () {
	console.log('Hello ' + inInput12.value + " " + inInput121.value);
	inInput12.value = "";
	inInput121.value = "";
}
// 	Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
const inInput13 =document.querySelector('.inEnter13'),inInput131 = document.querySelector('.inEnter131');
const button13 = document.querySelector('.buClick13');
const divOUT = document.querySelector('.out');
button13.onclick = function () {
	divOUT.innerHTML = (parseInt(inInput131.value) + parseInt(inInput13.value));
}

// 	Task 14.
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
const inInput14 = document.querySelector('.inEnter14');
inInput14.value = 'Hello';

// 	Task 15.
// Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
const y = document.querySelector('.inEnter15');
y.style.border = '2px solid red';

// 	Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
const inInput16 =document.querySelector('.inEnter16'),inInput161 = document.querySelector('.inEnter161');
const divOUT2 = document.querySelector('.out2');
divOUT2.innerHTML = (parseInt(inInput161.value)+parseInt(inInput16.value));

// 	Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку.
// Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль.
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
const inInput17 = document.querySelector('.inEnter17')


const button17 = document.querySelector('.buClick17')
button17.onclick = function(){
	let t =inInput17.value;
	t = parseInt(t);
	console.log(t);
}

// 	Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку.
// Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль.
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
const inInput18 = document.querySelector('.inEnter18')


const button18 = document.querySelector('.buClick18')
button18.onclick = function(){
	let t =inInput18.value;
	t = parseFloat(t);
	console.log(t);
}

// 	Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа.
// Выведите на страницу сумму данных чисел. Мы это делали! Зачем?
// Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!




// 	Task 20.
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку.
// По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.