/*1 task
 Придумайте самый короткий код для проверки, пуст ли элемент elem.*/
if (document.body.childNodes.length == 0) {
    console.log('Empty')
} else {
    console.log('There are elements')
}

/*2 task
 Создайте таблицу с 10 стороками и столбцами!
 Напишите код, который выделит все ячейки в таблице по диагонали.*/
var table = document.body.children[0];
for (var i = 0; i < table.rows.length; i++) {
    var td = table.rows[i].cells[i];
    td.style.backgroundColor = 'red';
}

/*3 task
 Напишите функцию printNumbersInterval(),
 которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100мс.*/
function printNumbersInterval() {
    var i = 1;
    var timer = setInterval(function () {
        console.log(i);
        if (i == 20) clearInterval(timer);
        i++;
    }, 100);
}
printNumbersInterval();

/*4 task
 Напишите функцию createSpanInBlockByID(blockID) которая будет создавать элемент 'span' в блоке id=blockID
 createSpanInBlockByID('myBlock') // создаст span в блоке с id='myBlock'
 P.S. Эта функция должна проверять наличие элемента в этом блоке, если он уже там есть второй раз она его добавлять не будет!*/
function createSpanInBlockByID(blockID) {
    if (document.getElementById(blockID).querySelectorAll('span').length == 0) {
        document.getElementById(blockID).appendChild(document.createElement('span'))
    }
}
createSpanInBlockByID('myBlock');

/*5 task
 Создайте функцию createCloneNode(block)
 которая будет клонировать передаваемый ей элемент и добавлять его в конец страницы!*/
function createCloneNode(block) {
    document.body.appendChild(document.createElement('div'));
}
createCloneNode();

/*6 task
 Создайте функцию addChildrenTo(block, count, type)
 которая будет создавать внутри block count количество детей типа type
 (type это будет тип блока например 'span, ul, li, div' и т.д.)*/
function addChildrenTo(block, count, type) {
    var n = document.createElement(type);
    if (count <= 0) {
        var c = 0
    } else {
        var c = count - 1
    }
    document.querySelector(block).insertBefore(n, document.querySelector(block).children[c])
}
addChildrenTo(block, count, type);

/*7 task
 Напишите функцию replaceElBy(blockCurrent, blockToReplace)
 которая будет заменять blockCurrent на blockToReplace и выводить сообщение пользователю после успешного проведения операции!*/
function replaceElBy(blockCurrent, blockToReplace) {
    document.body.replaceChild(blockCurrent, blockToReplace)
}
replaceElBy(blockCurrent, blockToReplace);