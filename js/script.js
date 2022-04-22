<<<<<<< Updated upstream

=======
//Task 1

function compareNumbers() {
    while (true) {
        var numberFirst = +prompt('Введите первое число');
        if (isNaN(numberFirst)) {
            alert('Первый ввод – не число');
            break;
        }
        var numberSecond = +prompt('Введите второе число');
        if (isNaN(numberFirst)) {
            alert('Второй ввод – не число');
            break;
        }
        var text;
        if (numberFirst === numberSecond) {
            text = 'числа равны';
        }
        if (numberFirst < numberSecond) {
            text = 'первое число меньше';
        }
        if (numberFirst > numberSecond) {
            text = 'второе число меньше';
        }
        alert(text);
    }
}
compareNumbers();

//Task 2

function isCheck(min, max, value) {
    return ( (value >= min && value <= max && !isNaN(value)));
}

while (true) {
    var floorsNumber = +prompt('Сколько этажей в доме?')
    if (isCheck(1, 25, floorsNumber)) {
        alert('Ok');
        break;
    } else {
        alert('Error');
    }
}

while (true) {
    var entrancesNumber = +prompt('Сколько подъездов в доме?')
    if (isCheck(1, 10, entrancesNumber)) {
        alert('Ok');
        break;
    } else {
        alert('Error');
    }
}

while (true) {
    var flatStaircase = +prompt('Сколько квартир на лестничной площадке?')
    if (isCheck(1, 20, flatStaircase)) {
        alert('Ok');
        break;
    } else {
        alert('Error');
    }
}

while (true) {
    var flatNumber = +prompt('Введите номер квартиры')
    if (isCheck(1, 5000, flatNumber)) {
        alert('Ok');
        break;
    } else {
        alert('Error');
    }
}
//Также можно сделать проверку данных как указано ниже(сделала так до лекции, потом переделала как вы показали).
/*
while (true) {
    floorsNumber = +prompt('Сколько этажей в доме?')
    if (floorsNumber >= 1 && floorsNumber <= 25 && !isNaN(floorsNumber)) break;
    alert('Неправильно введены данные!');
}
while (true) {
    entrancesNumber = +prompt('Сколько подъездов в доме?')
    if (entrancesNumber >= 1 && entrancesNumber <= 10 && !isNaN(entrancesNumber)) break;
    alert('Неправильно введены данные!');
}
while (true) {
    flatStaircase = +prompt('Сколько квартир на лестничной площадке?')
    if (flatStaircase >= 1 && flatStaircase <= 20 && !isNaN(flatStaircase)) break;
    alert('Неправильно введены данные!');
}
while (true) {
    flatNumber = +prompt('Введите номер квартиры')
    if (flatNumber >= 1 && flatNumber <= 5000 && !isNaN(flatNumber)) break;
    alert('Неправильно введены данные!');
}
*/
function entranceNumber() {
    var number = Math.ceil(flatNumber / (floorsNumber * flatStaircase))
    if (number <= entrancesNumber) {
        alert('Квартира в ' + number + '-ом подъезде.');
    }
}
entranceNumber();

//Task 3

var numberFirst = +prompt('Введите первое число');
var numberSecond = +prompt('Введите второе число');

function calculator(numberFirst, numberSecond) {

    if (numberFirst % 2 == 0 && numberSecond % 2 == 0) {
        return numberFirst * numberSecond;
    }
    if (numberFirst % 2 != 0 && numberSecond % 2 != 0) {
        return numberFirst + numberSecond;
    }
    return numberFirst % 2 != 0 ? numberFirst : numberSecond;
}

console.log(calculator(numberFirst, numberSecond));

//Task 4
// Если все 4 вершины прямоугольника находятся в первой четверти декартовой системы координат 
//и стороны прямоугольника расположены параллельно осям.

function checkRectangle() {
    while (true) {
        x1 = +prompt('Введите координаты верхней левой вершины прямоугольника по оси x');
        y1 = +prompt('Введите координаты верхней левой вершины прямоугольника по оси y');
        x2 = +prompt('Введите координаты верхней правой вершины прямоугольника по оси x');
        y2 = +prompt('Введите координаты верхней правой вершины прямоугольника по оси y');
        x3 = +prompt('Введите координаты нижней правой вершины прямоугольника по оси x');
        y3 = +prompt('Введите координаты нижней правой вершины прямоугольника по оси y');
        x4 = +prompt('Введите координаты нижней левой вершины прямоугольника по оси x');
        y4 = +prompt('Введите координаты нижней левой вершины прямоугольника по оси y');

        if (!isNaN(x1) && !isNaN(x2) && !isNaN(x3) && !isNaN(x4) && !isNaN(y1) && !isNaN(y2) && !isNaN(y3) && !isNaN(y4)) {
            break;
        } else {
            alert('Координаты должны иметь только числовые значения');
        }
    }

    if (x1 === x4 && x2 === x3 && y1 === y2 && y4 === y3) {
        alert('Заданные вершины образуют прямоугольник');
    } else {
        alert('Вершины заданы не правильно!');
    }
}

checkRectangle();

//Task 5

function getSequence(start = 0, step = 1) {
    var number = start;
return function (){
    var returnValue = number;
    number = number + step
    return returnValue;
}
}
var generator = getSequence();
console.log(generator());
console.log(generator());
console.log(generator());
>>>>>>> Stashed changes
