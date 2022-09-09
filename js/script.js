<<<<<<< Updated upstream

=======
$(document).ready(function () {
    $('body').append('<div></div>');
    $('div').addClass('wrap');
    $('div').append('<div></div><div></div><div></div>');
    $('div div:first').addClass('actions');


    //Сделали иконки

    $('.actions').append('<button><img src = "/img/icons/1.png"></img></button>');
    $('.actions').append('<button><img src = "/img/icons/2.png"></img></button>');
    $('.actions').append('<button><img src = "/img/icons/3.png"></img></button>');
    $('.actions').append('<button><img src = "/img/icons/4.png"></img></button>');
    $('.actions').append('<button><img src = "/img/icons/5.png"></img></button>');
    $('.actions').append('<button><img src = "/img/icons/6.png"></img></button>');

    $('button').addClass('btn');

    $('button:first-child').addClass('color');
    $('button:nth-child(2)').addClass('eyes');
    $('button:nth-child(3)').addClass('head');
    $('button:nth-child(4)').addClass('mouth');
    $('button:nth-child(5)').addClass('scale');
    $('button:nth-child(6)').addClass('spots');

    $('img').addClass('icons');

    $('div div:nth-child(2)').addClass('options');

    $('div div:last').addClass('main');

    // Сделали контейнера для вставки

    $('.main').append('<div></div><div></div><div></div><div></div><div></div><div></div>');

    $('.main div:first').addClass('dinoColor');
    $('.main div:nth-child(2)').addClass('dinoEyes');
    $('.main div:nth-child(3)').addClass('dinoHead');
    $('.main div:nth-child(4)').addClass('dinoMouth');
    $('.main div:nth-child(5)').addClass('dinoScale');
    $('.main div:nth-child(6)').addClass('dinoSpots');

    $('.main div:first').append('<h1>My little Dino</h1>');

    //Сделали массивы вариантов вставки

    var color = new Array();
    color[0] = "/img/body_color/1.png";
    color[1] = "/img/body_color/2.png";
    color[2] = "/img/body_color/3.png";
    color[3] = "/img/body_color/4.png";
    color[4] = "/img/body_color/5.png";
    color[5] = "/img/body_color/6.png";

    var eyes = new Array();
    eyes[0] = "/img/eyes/1.png";
    eyes[1] = "/img/eyes/2.png";
    eyes[2] = "/img/eyes/3.png";
    eyes[3] = "/img/eyes/4.png";

    var head = new Array();
    head[0] = "/img/head/1.png";
    head[1] = "/img/head/2.png";
    head[2] = "/img/head/3.png";

    var mouth = new Array();
    mouth[0] = "/img/mouth/1.png";
    mouth[1] = "/img/mouth/2.png";
    mouth[2] = "/img/mouth/3.png";

    var scale = new Array();
    scale[0] = "/img/scale/1.png";
    scale[1] = "/img/scale/2.png";
    scale[2] = "/img/scale/3.png";

    var spots = new Array();
    spots[0] = "/img/spots/1.png";
    spots[1] = "/img/spots/2.png";
    spots[2] = "/img/spots/3.png";

    $('.btn.color').on('click', func.bind(null, color));
    $('.btn.eyes').on('click', func.bind(null, eyes));
    $('.btn.head').on('click', func.bind(null, head));
    $('.btn.mouth').on('click', func.bind(null, mouth));
    $('.btn.scale').on('click', func.bind(null, scale));
    $('.btn.spots').on('click', func.bind(null, spots));

    function func(arr) {
        $('.grey').empty();
        $('.options').addClass('grey');
        jQuery.each(arr, function (index, value) {
            const img = $('<img></img>');
            $('.grey').append(img);
            img.addClass('img');
            img.attr('src', arr[index]);
            img.on('click', fnc.bind(null, arr, arr[index]))
        })
    }

    function fnc(arr, src) {
        
        if (arr === color) {
            $('.dinoColor').empty();
            $('.dinoColor').append('<img src = "' + src + '"></img>');
        }
        if (arr === eyes) {
            $('.dinoEyes').empty();
            $('.dinoEyes').append('<img src = "' + src + '"></img>');
        }
        if (arr === head) {
            $('.dinoHead').empty();
            $('.dinoHead').append('<img src = "' + src + '"></img>');
        }
        if (arr === mouth) {
            $('.dinoMouth').empty();
            $('.dinoMouth').append('<img src = "' + src + '"></img>');
        }
        if (arr === scale) {
            $('.dinoScale').empty();
            $('.dinoScale').append('<img src = "' + src + '"></img>');
        }
        if (arr === spots) {
            $('.dinoSpots').empty();
            $('.dinoSpots').append('<img src = "' + src + '"></img>');
        }
    }
})








































/*
    $('.color').on('mouseleave', function () {
        $('.options').removeClass('grey');
        $('.options img').remove();

    })
    */
>>>>>>> Stashed changes
