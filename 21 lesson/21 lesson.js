/*1 task
Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.*/
prime_number:
    for (i = 2; i < 10; i++) {

        for (j = 2; j < i; j++) {
            if (i % j == 0) continue prime_number;
        }

        console.log(i);
    }

/*2 task
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет*/
var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return;
    }
    classes.push(cls);
    obj.className = classes.join(' ');
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className)

/*3 task
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть*/
var del = {
    classN: 'open menu'
};

function removeClass(obj, cls) {
    var arr = del.classN ? del.classN.split(" ") : [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    del.classN = arr.join(' ');
}
removeClass(del, 'open');
removeClass(del, 'blabla');
alert(del.classN);

/*4 task
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива когда ввод прекращен.*/
var array = []
while (true) {
    var value = prompt("Enter the value:", 0);
    if (value == "" || value == null || value == isNaN(value)) break;
    array.push(+value);
}

/*5 task
Напишите код который принимат от пользователя значение x (можно например через prompt) и выводит значение следующей формулы*/
var x = prompt("Enter the value of x:");
var result = 5 * (x * x * x) - 5 * x * ((x * x) + 4);
alert(result);

/*6 task
Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2).
В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. 1,1,2,3,5,8..*/
number = prompt("Enter the value of Fibonacci:");
var arr = [1, 1];
for (var n = 2; n < number; n++) {
    arr[n] = arr[n - 1] + arr[n - 2];
}
console.log(arr);

/*7 task
Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
Если длинна больше 20, то обрезает строку и добавляет в конец строки '...' */
var string = prompt("Enter the string:");
if (string.length > 20) {
    alert(string.slice(0, 20) + '...');
} else alert(string);

/*8 task
Напиште код который выведет сотрудника который выполнил больше всех задач.*/
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var max = 0;
var maxTasks = "";
for (var name in tasksCompleted) {
    if (max < tasksCompleted[name]) {
        max = tasksCompleted[name];
        maxTasks = name;
    }
}
alert(maxTasks);
