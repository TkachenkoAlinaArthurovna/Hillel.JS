<<<<<<< Updated upstream

=======
let slides = ['https://picsum.photos/500/500', 'https://picsum.photos/600/600', 'https://picsum.photos/700/700'];
let ul = document.createElement('ul');
let div = document.querySelector('.slider-wrap');
div.append(ul);
let slide = [];
let count = 0;
let width = 0;

slides.forEach(function (item) {
    li = document.createElement('li');
    ul.append(li);
    let img = document.createElement('img');
    li.append(img);
    img.setAttribute('src', item);
    slide.push(li)
});
slide[count].classList.add('active')

const onMoveNext = () => {
    const active = ul.querySelector('.active')
    const nextElement = active.nextElementSibling

    console.log(nextElement)
    if (nextElement) {
        width = getComputedStyle(nextElement).width;
        count++;
        ul.style.transform = `translateX(${-parseInt(width)*count}px)`
        active.classList.remove('active');
        nextElement.classList.add('active');
    } else {
        count = 0;
        ul.style.transform = `translateX(0px)`
        active.classList.remove('active');
        slide[count].classList.add('active')
    }
}

const onMovePrev = () => {
    const active = ul.querySelector('.active')
    const prevElement = active.previousElementSibling
    console.log(prevElement)
    if (prevElement) {
        width = getComputedStyle(prevElement).width;
        count--;
        ul.style.transform = `translateX(${-parseInt(width)*count}px)`
        active.classList.remove('active');
        prevElement.classList.add('active');
    } else {
        count = slides.length-1;
        width = getComputedStyle(active).width;
        ul.style.transform = `translateX(${-parseInt(width)*count}px)`
        active.classList.remove('active');
        slide[count].classList.add('active')
    }
}

const btn = document.querySelectorAll('.slider-btn')
btn.forEach(elem => {
    if (elem.classList.contains('next')) {
        elem.addEventListener('click', onMoveNext)
    } else {
        elem.addEventListener('click', onMovePrev)
    }
})
>>>>>>> Stashed changes
