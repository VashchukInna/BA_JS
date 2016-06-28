/*1 task
 Напишите функцию которая будет выводить текст на екран: "Как ваше имя?";
 После ввода имя запишите как свойство "name" для ссылки внутри функции this;
 Создайте пустой объект и вызовите эту функцию для объекта и просто для окна и посмотрите изменился ли объект,
 и создалась ли переменная name в окне браузера?*/
function getName() {
    alert(this.Name);
}
var user = {
    Name: prompt("Как ваше имя?")
};
getName.call(user);

/*2 task
 Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
 sumTo(1) = 1
 sumTo(2) = 2 + 1 = 3
 sumTo(3) = 3 + 2 + 1 = 6
 sumTo(4) = 4 + 3 + 2 + 1 = 10*/
var n = prompt("Enter the number:");
function sumTo(n) {
    var sum = 0;
    for (i = 1; i <= n; i++) {
        sum = sum + i;
    }
    alert(sum);
}
sumTo(n);

/*3 task
 Задача «Hello World» для функций :)
 Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b. не используя Math.min();*/
var a = prompt("Enter the first number");
var b = prompt("Enter the second number");
function min(a, b) {
    if (a < b) {
        alert("Less is " + a);
    } else {
        alert("Less is " + b);
    }
}
min(a, b);

/*4 task
 Создайте объект у которого будет:
 1) свойство "number" которое не будет перечисляемым при цикле for .. in и будет равно 9
 2) свойство "cantDelete" которое нельзя удалить
 3) метод "getDouble" которое будет записывать число которое будет передаватся в метод как аргумент умноженное на 2;
 а возвращать это же число деленное на 3; (то есть на set будет умножать число на 2,
 а на get будет отдавать это же число деленное на 3*/
var strict = 0;
var obj = {
    number: 9,
    cantDelete: strict,
    getDouble: function (n) {
        var data = prompt("'set' or 'get'")
        if (data == 'set') {
            n *= 2;
        } else {
            n %= 3;
        }
    }
};

/*5 task
 Напишите код, который отсортирует массив объектов people по полю age*/
var vasya = {name: "Вася", age: 23};
var masha = {name: "Маша", age: 18};
var vovochka = {name: "Вовочка", age: 6};
var people = [vasya, masha, vovochka];
function Age(a, b) {
    return a.age - b.age;
}
people.sort(Age);
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);

/*6 task
 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).*/
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];
function unique(strings) {
    var newStr = [];
    next:
        for (i = 0; i <= strings.length; i++) {
            var str = strings[i];
            for (var j = 0; j < newStr.length; j++) {
                if (newStr[j] == str) continue next;
            }
            newStr.push(str);
        }
    return newStr;
}
alert(unique(strings));