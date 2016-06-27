/*1 task
 Из массива arr выведите строку которая будет равна "Мама мыла раму"
 используя встроенные методы массива (если есть лишние елементы в массиве их нужно удалить!):*/
var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
arr.reverse();
var str = function (value) {
    return typeof(value) == 'string';
};
var string = arr.filter(str);
var result = string.join("");
console.log(result);


/*2 task
 Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
 Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.*/
isPal = prompt("Is this palindrome?", '');
var remGap = isPal.replace(/ /g, "");
var isPal = remGap.toLowerCase();
var arr = isPal.split('');
arr.reverse();
var result = arr.join('');
console.log(isPal, result);
if (result == isPal) {
    console.log(true);
} else {
    console.log(false);
}

/*3 task
 Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
 воз - зов, киборг - гробик, корсет - костер - сектор.
 Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.*/
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
function anClean(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join('');
        obj[sorted] = arr[i];
    }
    var result = [];
    for (var key in obj)
        result.push(obj[key]);
    return result;
}
console.log(anClean(arr));

/*4 task
 Создайте программу которая соеденит массив в строку и поменяет местами порядок следования слов в массиве*/
var arr = ['rrrA', 'toboR', 'ekiL', 'dooG', 'esoR'];
var turnOver = arr.reverse();
var str = turnOver.join(" ,");

function ready(str) {
    return str.split("").reverse().join("");
}
console.log(ready(str));

/*5 task
 Найти сумму целых чисел от 1 до 100*/
var n = 0;
for (i = 0; i < 101; i++) {
    n = n + i;
}
console.log(n);

/*Найти сумму четных чисел от 0 до 100. */
var evenNum = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNum = evenNum + i;
    }
}
console.log(evenNum);

/*6 task
 Напишите функцию callMe которая будет принимать 3 аругумента,
 это будут цыфры, потом она будет суммировать их и выводить на екран результат их суммы!
 Если в нее передали не числа то она должна выводить сообщение об ошибке в консоль и возвращать null;
 (вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") )*/
var a = +prompt("First digit");
var b = +prompt("Second digit");
var c = +prompt("Third digit");
function callMe(a, b, c) {
    var rez = a + b + c;
    if ((typeof rez) == "number") {
        alert("Sum" + " " + rez);
    }
    else {
        console.error("Тут текст ошибки")
    }
}
(callMe(a, b, c));

/*7 task
 Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом.
 Она должна возвращать массив соединенный через запятые и отсортированный по алфавиту (Array.join(','));*/
var array = ["b", "a", "d", "c", "f", "e"];
function callMeAgain(array) {
    var sort = array.sort();
    return sort.join(",");
}
console.log(callMeAgain(array));


