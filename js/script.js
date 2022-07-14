<<<<<<< Updated upstream

=======
// const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
// const min = 1;
// const max = 6;
// let go = document.querySelector('.go');
// let cube = document.querySelector('.cube');
// let fishka = document.querySelector('.fishka');
// let currentPosition = 45.5

// go.addEventListener('click', startGame);

// function render(value,move) {
//     cube.src = `img/${value}.png`;
//     fishka.style.left = move + 'px';  
// }

// function startGame(){
// let valueCube = random(min,max);
// currentPosition = currentPosition + valueCube * 100;
// render(valueCube,currentPosition)
// }

let go = document.querySelector('.go');
let cubeElement = document.querySelector('.cube');
let fishkaElement = document.querySelector('.fishka');
go.addEventListener('click', startGame);

let cube = new Cube(cubeElement);
let fishka = new Fishka(fishkaElement);
function startGame(){
    cube.generate();
    fishka.move(cube.value);
}

console.log(fishkaElement.getBoundingClientRect())
>>>>>>> Stashed changes
