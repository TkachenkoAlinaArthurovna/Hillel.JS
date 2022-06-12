<<<<<<< Updated upstream

=======
var product = document.querySelector('.product');
var nameProduct = product.querySelector('.name');
var price = product.querySelector('.price');
var unit = product.querySelector('.unit');
var description = product.querySelector('.description');
var email = product.querySelector('.email');

function toPascalCode(str) {
    return str.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    });
}

nameProduct.addEventListener('input', function () {
    var regNameProduct = /^[\w\s]{1,25}$/i;
    nameProduct.value = toPascalCode(nameProduct.value)
    var resultNameProduct = regNameProduct.test(nameProduct.value);
    if (!resultNameProduct) {
        alert('Поле может содержать не больше 25 символов!')
        nameProduct.value = '';
    }
})

price.addEventListener('input', function () {
    var regPrice = /^\d+([. ,])*(\d{0,2})$/;
    var strPrice = price.value;
    var resultPrice = regPrice.test(strPrice);
    console.log(resultPrice)
    if (!resultPrice) {
        alert('Не правильно ввели цену!')
    }
})

unit.addEventListener('input', function () {
    var regUnit = /^\d+([. ,])*(\d{0,3})\s*[(шт) (кг) (л) (ед)]*$/;
    var strUnit = unit.value;
    var resultUnit = regUnit.test(strUnit);
    console.log(resultUnit)
    if (!resultUnit) {
        alert('Не правильно ввели единицы измерения!')
    }
})

description.addEventListener('input', function () {
    var regDescription = /^.{1,150}$/i;
    description.value = toPascalCode(description.value)
    var resultDescription = regDescription.test(description.value);
    console.log(resultDescription)
    if (!resultDescription) {
        alert('Поле может содержать не больше 150 символов!')
    }
})

email.addEventListener('change', function (event) {
    var regEmail = /^(https:\/\/)[\w\s]*$/ig;
    var resultEmail = regEmail.test(email.value)
    console.log(resultEmail)
    if (!resultEmail) {
        email.value = 'https://' + email.value
    }
})
>>>>>>> Stashed changes
