<<<<<<< Updated upstream
=======
//Вариант 1
/*
setInterval(function fn() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById('test').innerHTML = time
}, 1000);

var timeAlarm = (prompt('Введите время', '00:00'));
var hoursMinutesAlarm = timeAlarm.split(':'); //превратили значение в массив
var hoursAlarm = +hoursMinutesAlarm[0]; //будильник часы
var minutesAlarm = +hoursMinutesAlarm[1]; //будильник минуты

var toCompare = setInterval(function fn() {
    var date = new Date();
    var timeHours = date.getHours(); // начало часы
    var timeMinutes = date.getMinutes(); //начало минуты
    if (timeHours === hoursAlarm && timeMinutes === minutesAlarm) {
        alert('Пора вставать!');
        clearInterval(toCompare);
    }
}, 1000);
*/
//Вариант 2

setInterval(function fn() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById('test').innerHTML = time
}, 1000);

var timeAlarm = (prompt('Введите время', '00:00'));
var hoursMinutesAlarm = timeAlarm.split(':'); //превратили значение в массив
var hoursAlarm = +hoursMinutesAlarm[0]; //будильник часы
var minutesAlarm = +hoursMinutesAlarm[1]; //будильник минуты

var date = new Date();
var timeHours = date.getHours(); // начало часы
var timeMinutes = date.getMinutes(); //начало минуты

function getDifferenceHours(hoursAlarm, timeHours) {
    var hours = hoursAlarm - timeHours; //разница часы
    if (hours < 0) {
        return hours = 24 - timeHours  + hoursAlarm;
    } else return hours;
}

function getDifferenceMinutes(minutesAlarm, timeMinutes) {
    var minutes = minutesAlarm - timeMinutes; //разница минуты
    if (minutes < 0) {
        return minutes = 60 - timeMinutes + minutesAlarm;
    } else return minutes;

}
var hours = getDifferenceHours(hoursAlarm, timeHours); //через сколько часов сработает будильник
var minutes = getDifferenceMinutes(minutesAlarm, timeMinutes); //через сколько минут сработает будильник

var hoursMilliseconds = hours * 3600000

var minutesMilliseconds = minutes * 60000

var sumaHoursMinutesMilliseconds = hoursMilliseconds + minutesMilliseconds - date.getSeconds() * 1000

function alarm() {
    alert('Пора вставать!');
}

setTimeout(alarm, sumaHoursMinutesMilliseconds);
>>>>>>> Stashed changes

