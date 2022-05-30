<<<<<<< Updated upstream
=======
var step = 5;
var tank = document.querySelector('.tank');
var fire = document.querySelector('.fire');
var tLeft = tank.getBoundingClientRect().left;
var tTop = tank.getBoundingClientRect().top;
var widthTankHalf = tank.getBoundingClientRect().width / 2;
var widthFireHalf = fire.getBoundingClientRect().width / 2;
var direction = 0;

document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        renderFire()
    }

    if (e.code === 'KeyD') {
        direction = 180
        tLeft = tLeft + step;
    }

    if (e.code === 'KeyA') {
        direction = 0
        tLeft = tLeft - step;
    }

    if (e.code === 'KeyW') {
        direction = 90
        tTop = tTop - step;
    }

    if (e.code === 'KeyS') {
        direction = 270
        tTop = tTop + step;
    }

    renderTank()
})

function renderFire() {
    var fLeft = tLeft
    var fTop = tTop

    fire.style.transform = `translate(-50%, -50%) rotate(${direction - 90}deg)`

    if (direction === 0) {
        fLeft = tLeft - widthTankHalf - widthFireHalf
    }
    if (direction === 180) {
        fLeft = tLeft + widthTankHalf + widthFireHalf
    }
    if (direction === 90) {
        fTop = tTop - widthTankHalf - widthFireHalf
    }
    if (direction === 270) {
        fTop = tTop + widthTankHalf + widthFireHalf
    }

    fire.style.left = fLeft + 'px'
    fire.style.top = fTop + 'px'

    fire.classList.add('fire-active')
    setTimeout(() => fire.classList.remove('fire-active'), 500)
}

function renderTank() {
    tank.style.transform = `translate(-50%, -50%) rotate(${direction}deg)`

    if (tLeft < widthTankHalf) {
        tLeft = widthTankHalf
    }

    if (tLeft > window.innerWidth - widthTankHalf) {
        tLeft = window.innerWidth - widthTankHalf
    }

    if (tTop < widthTankHalf) {
        tTop = widthTankHalf
    }

    if (tTop > window.innerHeight - widthTankHalf) {
        tTop = window.innerHeight - widthTankHalf
    }
>>>>>>> Stashed changes

    tank.style.left = tLeft + 'px'
    tank.style.top = tTop + 'px'
}