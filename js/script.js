
function creatButton(tag, clName, text) {
    var btn = document.createElement(tag);
    btn.className = clName;
    btn.innerHTML = text;
    btn.setAttribute('data-id', text)
    var wrap = document.querySelector('.wrap')
    wrap.append(btn)
}

var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
for (var j = 0; j < field.length; j++) {
    for (var i = 0; i < field.length; i++) {
        creatButton('button', 'btn',(j + 1) + field[i])

    }
}

var wrap = document.querySelector('.wrap')
var ships = ['1a', '3a',' 4a', '6b',' 2c', '6c', '2d', '2e', '6f', '7f', '8f', '1h', '2h', '3h', '4h']
var indicator = document.createElement('div');
indicator.className = 'value';
wrap.before(indicator);

wrap.addEventListener('click', function (e) {
    var elem = e.target;
    if (elem) {
        console.log(elem.dataset.id)
    }
    if (ships.includes(elem.dataset.id)) {
        elem.className = 'btnShip';
        indicator.innerHTML = 'РАНИЛИ!';
    } else {
        indicator.innerHTML = 'МИМО:)';
    }
})


