<<<<<<< Updated upstream

=======
//Task 1
// без замыкания
/*
var password = prompt('Введите пожалуйста пароль');

function makePassword() {
    var realPassword = '1991';

    if (password === realPassword)
        return true;
    else {
        return false;
    }

}
var result = makePassword();
console.log(makePassword());
*/
//Task 1
// с замыканием

var realPassword = prompt('Введите пожалуйста пароль');

function makePassword(password) {
    return function (realPassword) {
        
        return password === realPassword;
            
    }
}

var result = makePassword('1991');
console.log(result(realPassword));

//Task 2

function toGenerate(min, max) {
    var number = [];
    return function () {

        function getRandomIntInclusive() {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var numberRandom = getRandomIntInclusive();
        while (number.includes(numberRandom) && number.length < (max - min + 1)) {
            numberRandom = getRandomIntInclusive();
        }
        number.push(numberRandom);
        return numberRandom;
    }
}

var result = toGenerate(1, 100);
console.log(result());
>>>>>>> Stashed changes
