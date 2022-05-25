<<<<<<< Updated upstream
=======
function createButton(tag, clName, text) {
    var btn = document.createElement(tag);
    btn.className = clName;
    btn.setAttribute('data-id', text)
    var wrap = document.querySelector('.wrap')
    wrap.append(btn)

}

function createField() {
    var field = ['A', 'B', 'C']
    for (var j = 0; j < field.length; j++) {
        for (var i = 0; i < field.length; i++) {
            createButton('button', 'btn', field[j] + i)

        }
    }
}

function getValue(path) {
    var elem = document.querySelector(`[data-id="${path}"]`)
    return elem.innerHTML
}

function check() {
    for (var i = 0; i < win.length; i++) {
        if (getValue(win[i][0]) === getValue(win[i][1]) && getValue(win[i][0]) === getValue(win[i][2]) && getValue(win[i][0])) {
            if (getValue(win[i][0])==='X'){
                alert('Выиграл игрок 1'); 
            }
            else {
                alert('Выиграл игрок 2'); 
            }
            break;
        }
    }
}

var wrap = document.querySelector('.wrap')
var restart = document.querySelector('.restart')
var player = 0;
var win = [
    ['A0', 'A1', 'A2'],
    ['B0', 'B1', 'B2'],
    ['C0', 'C1', 'C2'],
    ['A0', 'B0', 'C0'],
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A0', 'B1', 'C2'],
    ['A2', 'B1', 'C0']
]

createField();

wrap.addEventListener('click', function (e) {
    var elem = e.target;
    if (elem.innerHTML) {
        return;
    }
    if (player % 2 === 0) {
        elem.innerHTML = 'X';
        player++;
    } else {
        elem.innerHTML = '0';
        player++;
    }
    check();
})

restart.addEventListener('click', function (e) {
    wrap.innerHTML = '';
    createField();
    player = 0;
})



>>>>>>> Stashed changes

