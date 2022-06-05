<<<<<<< Updated upstream

=======
//Получаем координаты курсора и передаём мышке

var block = document.querySelector('.block-animal');
var mouse = document.querySelector('.mouse');
var cat = document.querySelector('.cat');

block.addEventListener('mousemove', function mouseCat(e) {
    if (!startTime) {
        start();
    }
    if (!mouse) {
        return
    }
    if ((e.clientX < block.getBoundingClientRect().right - (mouse.offsetWidth / 2) &&
            e.clientX > block.getBoundingClientRect().left + (mouse.offsetWidth / 2)) &&
        (e.clientY < block.getBoundingClientRect().bottom - (mouse.offsetHeight / 2) &&
            e.clientY > block.getBoundingClientRect().top + (mouse.offsetHeight / 2))) {
        mouse.style.position = 'fixed';
        mouse.style.left = e.clientX - (mouse.offsetWidth / 2) + 'px';
        mouse.style.top = e.clientY - (mouse.offsetHeight) + 'px';
    }
    //Передаём котику координаты мышки

    function goCat() {
        cat.style.position = 'fixed';
        cat.style.left = e.clientX - (cat.offsetWidth / 2) + 'px';
        cat.style.top = e.clientY - (cat.offsetHeight) + 'px';
        tasty()
    }

    setTimeout(goCat, 2000)

    //Ловим мышку в ловушку

    // function catchMouse() {
    //     var leftMouse = parseInt(mouse.style.left) + (mouse.offsetWidth) + 'px';
    //     var topMouse = parseInt(mouse.style.top) + (mouse.offsetHeight) + 'px';

    //     if ((parseInt(leftMouse) < (parseInt(xTrap) + parseInt(widthTrap)) && parseInt(leftMouse) > parseInt(xTrap)) &&
    //         (parseInt(topMouse) > parseInt(yTrap) && parseInt(topMouse) < (parseInt(yTrap) + parseInt(heightTrap)))) {
    //         block.removeEventListener('mousemove', mouseCat);

    //     }
    // }
    // catchMouse()

    trap.addEventListener('mouseenter', function catchMouse(e) {
        block.removeEventListener('mousemove', mouseCat);
    })

    //Сравниваем координаты мышки и кошки

    function tasty() {
        var leftCat = parseInt(cat.style.left) + (cat.offsetWidth / 2) + 'px';
        var leftMouse = parseInt(mouse.style.left) + (mouse.offsetWidth / 2) + 'px';
        var topCat = parseInt(cat.style.top) + (cat.offsetHeight) + 'px';
        var topMouse = parseInt(mouse.style.top) + (mouse.offsetHeight) + 'px';
        if (leftCat === leftMouse && topCat === topMouse) {
            var result = document.querySelector('.result');
            result.innerHTML = 'Game over!' + ' ' + h.innerHTML + ':' + m.innerHTML + ':' + s.innerHTML;
            clearInterval(timerId);
        }
    }
})

//Секундомер

var startTime;
var seconds = 0;
var minutes = 0;
var hours = 0;
var s = document.querySelector('.seconds');
var m = document.querySelector('.minutes');
var h = document.querySelector('.hours');

function stopwatch() {
    var time = new Date(new Date().getTime() - startTime)
    seconds = time.getSeconds();
    minutes = time.getMinutes();
    hours = time.getUTCHours();

    s.innerHTML = seconds;
    if (seconds < 10) {
        s.innerHTML = '0' + seconds;
    }

    m.innerHTML = minutes;
    if (minutes < 1) {
        m.innerHTML = '00';
    }
    if (minutes < 10) {
        m.innerHTML = '0' + minutes;
    }

    h.innerHTML = hours;
    if (hours < 1) {
        h.innerHTML = '00';
    }
    if (hours < 10) {
        h.innerHTML = '0' + hours;
    }
}


//Ловушка
var trap = document.querySelector('.trap');
var xTrap = 0;
var yTrap = 0;
var widthTrap = 0;
var heightTrap = 0;

function getRandomTrap() {
    //Рандомно создали точку 
    var min = 150;
    var max = 550;
    xTrap = min + (max - min) * Math.random() + 'px';
    yTrap = min + (max - min) * Math.random() + 'px';

    //Ширина и высота ловушки 
    var minTrap = 50;
    var maxTrap = 150;
    widthTrap = minTrap + (maxTrap - minTrap) * Math.random() + 'px';
    heightTrap = minTrap + (maxTrap - minTrap) * Math.random() + 'px';

    //Передаём параметры ловушке
    trap.style.position = 'fixed';
    trap.style.width = widthTrap;
    trap.style.height = heightTrap;
    trap.style.left = xTrap;
    trap.style.top = yTrap;
}

//Начало игры
let timerId;
function start() {
    startTime = new Date().getTime();
    timerId = setInterval(stopwatch, 100);
    setInterval(getRandomTrap, 5000);
}
>>>>>>> Stashed changes
