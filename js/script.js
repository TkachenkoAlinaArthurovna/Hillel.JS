//Задача 1

var min = prompt("Введите число от 0 до 59");
if (min >= 0 && min < 15) {
    alert ( "Первая четверть" );
    }
    else if (min >= 15 && min < 30) {
    alert ( "Вторая четверть" );
    }
    else if (min >= 30 && min < 45) {
    alert ( "Третья четверть" );  
    }
    else if (min >= 45 && min < 60) {
    alert ( "Четвертая четверть" );
    } 
    else {
    alert ( "Ошибка" );
    }

//Задача 2

var a = 1;
if (a === 1) {
    alert ( "Верно" ); 
}
else {
    alert ( "Неверно" ); 
}

//Задача 3

var test = false;
if (test != true) {
    alert ( "Верно" );  
}
else {
    alert ( "Неверно" );
}

//Тернарное выражение

var test = false;
var test = (test != true) ? 'Верно' : 'Неверно';
alert(test);

//Задача 4

var a;
if (a > 0 && a < 5) {
    alert ( "Верно" );
    }
    else {
    alert ( "Неверно" );
}

//Задача 5

var num = prompt("Введите число от 1 до 4");
var result;
if (num == 1) {
    result = "Зима"; 
    }
    else if (num == 2) {
        result = "Весна";
    }    
    else if (num == 3) {
        result = "Лето";
    }    
    else if (num == 4) {
        result = "Осень";
    }    
    else {
        result = "Неверное значение";
    }        
alert (result);

//Задача 5 (Switch)

var num = prompt("Введите число от 1 до 4");
var result;
switch (num) {
    case '1':
        result = "Зима"; 
        break;  
    case '2':
        result = "Весна"; 
        break;
    case '3':
        result = "Лето"; 
        break;
    case '4':
        result = "Осень"; 
        break; 
    default:
        result = "Неверное значение";          
}
alert (result)


