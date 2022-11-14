<<<<<<< Updated upstream

=======
let btn = document.querySelector('.btn');
let btnCreateDoings = document.querySelector('.btn-create-doings');
let login = document.querySelector('.login');
let entry = document.querySelector('.entry');
let user = document.querySelector('.name');
let toDo = document.querySelector('.to-do');
let listDoings = document.querySelector('.list-doings');
let affairs = document.querySelector('.affairs');
let saved = localStorage.getItem('client');
let arr = saved && JSON.parse(saved) || [];
console.log(arr)

function addLogin() {

    let a = arr.find(function (item) {
        debugger
        return item.name == login.value

    })

    if (a) {
        entry.style.display = 'none';
        toDo.style.display = '';
        user.textContent = a.name;

        for (key in a) {
            if (key == 'name') continue;
            let chapterListDoings = document.createElement('li');
            let textDoing = document.createElement('label');
            let doing = document.createElement('input');

            chapterListDoings.classList.add('list-style');
            listDoings.append(chapterListDoings);
            textDoing.classList.add('doing-wrapper');
            textDoing.textContent = a[key].act;
            chapterListDoings.append(textDoing);
            textDoing.prepend(doing);
            doing.setAttribute('type', 'checkbox');
            btnCreateDoings.addEventListener('click', addDoings.bind(null, a));
        }
    } else {
        let person = {
            name: ''
        };
        person.name = login.value;
        arr.push(person);
        localStorage.setItem('client', JSON.stringify(arr));
        entry.style.display = 'none';
        toDo.style.display = '';
        user.textContent = person.name;

        btnCreateDoings.addEventListener('click', addDoings.bind(null, person));
    }

}

function addDoings(person) {
    let chapterListDoings = document.createElement('li');
    let textDoing = document.createElement('label');
    let doing = document.createElement('input');

    chapterListDoings.classList.add('list-style');
    listDoings.append(chapterListDoings);
    textDoing.classList.add('doing-wrapper');
    textDoing.textContent = affairs.value;
    chapterListDoings.append(textDoing);
    textDoing.prepend(doing);
    doing.setAttribute('type', 'checkbox');
    //делаем ключ под названием действия
    let key = textDoing.textContent;
    //делаем переменную в которую вкладываем ключ-значение имени
    const item = arr.find(function (item) {

        return item.name == person.name;
    })
    //даём переменной ключ-значение еще одно
    item[key] = {};
    item[key].act = textDoing.textContent;
    item[key].checked = false;

    doing.addEventListener('change', addCheck.bind(null, item[key]))
    localStorage.setItem('client', JSON.stringify(arr));
}

function addCheck(item, e) {
    console.log(item)
    console.log(e)
    item.checked = e.target.checked
    localStorage.setItem('client', JSON.stringify(arr));
}

btn.addEventListener('click', addLogin);
>>>>>>> Stashed changes
