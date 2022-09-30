$(document).ready(function () {
    const game = [{
            question: 'Назовіть столицю України',
            answer: 'київ'
        },
        {
            question: 'Який з літературних творів Тараса Шевченка перекладався найбільше разів та нині читається на 147 мовах світу?',
            answer: 'кобзар'
        },
        {
            question: 'Центральною геральдичною фігурою герба України є...?',
            answer: 'тризуб'
        },
        {
            question: 'Як називається Основний закон країни?',
            answer: 'конституція'
        },
        {
            question: 'Найдовша річка України?',
            answer: 'дніпро'
        }
    ]

    var que = 0;

    function getRandom(min, max) {
        return que = Math.floor(Math.random() * (max - min) + min);
    }

    function start() {
        $('.contEnter').css('display', 'flex');
        getRandom(0, 5);
        $('.wrapQuest').text(game[que].question);
        var ansLength = game[que].answer.length;
        $('ul').html('<li class="itemLetter"></li>');
        var letter = $('ul').html();
        for (let i = 1; i < ansLength; i++) {
            $('ul').prepend(letter);
        }

    }

    $('.start').click(function () {
        start();
    })

    $('.contEnter').submit(function (e) {
        e.preventDefault();
        var value = $('.myLetter').val().toLowerCase();
        var ans = game[que].answer.split('');
        if (value == '') {
            alert('Ви не заповнили поле!')
            return
        }
        if (value.length >= 2) {
            alert('Потрібно вводити одну букву!')
            return
        }
        var result = false;
        ans.find(function (item, index, array) {
            if (item == value) {
                if (index == 0) {
                    value = value.toUpperCase();
                    $('ul li:first').text(value);
                } else {
                    $('ul li:nth-child(' + (index + 1) + ')').text(value);
                }
                result = true;
            }
        })
        if (!result) {
            $('.yakubovichSay').text('Ви програли!');
            $('.contEnter').css('display', 'none');
        }
        $('.myLetter').val('');

        var filled = Array.from($('.itemLetter').text());
        if (ans.length == filled.length) {
            alert('Перемога!');
            $('ul').html('');
            $('.wrapQuest').text('');
        }

    })

    $('.roll').click(function (e) {
        e.preventDefault();
        var angles = (Math.floor(Math.random() * (16 - 1) + 1)) * 22.5
        console.log(1111, angles)
        $('.baraban').css(
            'transform', 'rotate( ' + angles + 'deg )'
        );

        //  функция для определения угла наклона элемента 
        var earnings = $('.score');
        var value = +earnings.text();
        console.log(earnings.text())

        function getDegreeElementById() {
            console.log('hi')
            var style = $('.baraban').css('transform');
            var values = style.split(/\(|,|\)/);
            var angle = Math.atan2(+values[2], +values[1]);
            values.textContent = ((angle * (180 / Math.PI) + 360) % 360).toFixed(0)

            if (angles == 135) {
                earnings.text(value + 100)
            }
            if (angles == 45) {
                earnings.text(value * 3)
            }
            if (angles == 337.5) {
                earnings.text(value + 500)
            }
            if (angles == 315) {
                alert('Приз!')
            }
            if (angles == 225) {
                earnings.text(value + 1)
            }
            if (angles == 112.5) {
                earnings.text(value + 1000)
            }
            if (angles == 202.5) {
                earnings.text(value + 800)
            }
            if (angles == 180) {
                earnings.text(value + 600)
            }
            if (angles == 90) {
                earnings.text(0)
            }
            if (angles == 157.5) {
                earnings.text(value * 2)
            }
            if (angles == 270) {
                earnings.text(value + 900)
            }
            if (angles == 247.5) {
                earnings.text(value + 400)
            }
            if (angles == 22.5) {
                earnings.text(value + 200)
            }
            if (angles == 67.5) {
                earnings.text(value + 700)
            }

        }

        getDegreeElementById();


    });

});