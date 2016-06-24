/*1 task
 Создайте объект с помощи функции-конструктора Person.
 В объекте должны быть свойства name, last_name && age, метод isCanWalk() который будет возвращать true, и метод countPersons
 как статический метод который будет считать сколько екземпляров Person мы создали;
 Cоздайте несколько екземпляров Person. */
function Person(name, last_name, age) {
    Person.number++;
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.canWalk = function () {
        return true;
    }
}
Person.number = 0;
Person.result = function () {
    alert("Создано" + " " + this.number + " " + "экземпляра Person");
};

var Sally = new Person('Sally', 'Taylor', 20);
var Barbara = new Person('Barbara', 'Ellison', 30);
var Rachael = new Person('Rachael', 'Winters', 40);
Person.result();

/*2 task
 Создайте обьект bus через функцию-конструктор Car который будет иметь свойства canRide, wheels && model;
 В нем переопределите метод toString() который будет при его вызове выводить:
 "Это объект bus! Он может ехать? 'тут значение свойства canRide' У него 'тут значение свойства wheels' колеса и у него модель 'тут значение cвойства model'";
 Создайте несколько экземпляров-объектов функции Car и выведите результат метода toString() для каждого из них!*/
function Car(canRide, wheels, model) {
    this.canRide = canRide;
    this.wheels = wheels;
    this.model = model;
};

Car.prototype.toString = function () {
    return "Это объект bus! Он может ехать?" + " " + this.canRide + " " + "У него" + " " + this.wheels + " " + "колеса и у него модель" + " " + this.model
};

var bus = new Car("Может.", 4, "Ikarus");
alert(bus);

var lexus = new Car("Может.", 4, "Lexus");
alert(lexus);

var Porsche = new Car("Может.", 4, "Porsche");
alert(Porsche);

/*3 task
 Последовательный вызов нескольких методов объекта. Такой подход называется «чейнинг» (chaining)*/
var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        alert(this.step);
        return this;
    }
};
ladder.up().up().down().up().down().showStep();

/*4 task
 Есть два бегуна:
 var runner1 = new Runner();
 var runner2 = new Runner();
 У каждого есть метод step(), который делает шаг, увеличивая свойство steps.
 Конкретный код метода step() не имеет значения, важно лишь что шаг делается не мгновенно, он требует небольшого времени.
 Если запустить первого бегуна через setInterval, а второго — через вложенный setTimeout — какой сделает больше шагов за 5 секунд? */
function Runner() {
    this.steps = 0;
    this.step = function () {
        this.steps++;
    }

}
var runner1 = new Runner();
var runner2 = new Runner();

var t1 = setInterval(function () {
    runner1.step();
}, 15);
var t2 = setTimeout(function go() {
    runner2.step();
    t2 = setTimeout(go, 15);
}, 15);
setTimeout(function () {
    clearInterval(t1);
    clearTimeout(t2);
    alert(runner1.steps);
    alert(runner2.steps);
}, 5000);