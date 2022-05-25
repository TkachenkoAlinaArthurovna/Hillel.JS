
function creatButton(tag, clName, text) {
    var btn = document.createElement(tag);
    btn.className = clName;
    btn.innerHTML = text;
    btn.setAttribute('data-id', text)
    var wrap = document.querySelector('.wrap')
    wrap.append(btn)
}

var fieldsABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
for (var j = 0; j < fieldsABC.length; j++) {
    for (var i = 0; i < fieldsABC.length; i++) {
        creatButton('button', 'btn', fieldsABC[i] + (j + 1))

    }
}

var wrap = document.querySelector('.wrap')
var arrShip = ['A1', 'C1', 'D1', 'F2', 'F3', 'B3', 'B4', 'B5', 'F6', 'G6', 'H6', 'A8', 'B8', 'C8', 'D8', ]
var indicator = document.createElement('div');
indicator.className = 'value';
wrap.before(indicator);

wrap.addEventListener('click', function (e) {
    var elem = e.target;
    if (elem) {
        console.log(elem.dataset.id)
    }
    if (arrShip.includes(elem.dataset.id)) {
        elem.className = 'btnShip';
        indicator.innerHTML = 'РАНИЛИ!';
    } else {
        indicator.innerHTML = 'МИМО:)';
    }
})
