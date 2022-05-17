<<<<<<< Updated upstream
=======
var users = [{
        name: 'Panda Vasya',
        url: 'https://cutt.ly/Hn90ez7',
        description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'
    },
    {
        name: 'Panda Petya',
        url: 'https://cutt.ly/Fn90xUG',
        description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода'
    },
    {
        name: 'Panda Fedya',
        url: 'https://klike.net/uploads/posts/2019-07/1562653261_1.jpg',
        description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль'
    }
]

users.forEach(function(item, index, array) {
    if (typeof item === 'object') {
        for (var key in item) {
            if (key === 'name') {
                var h2 = document.createElement('h2');
                h2.innerHTML = item[key]
                document.body.append(h2);
                h2.className = 'title name-panda'
            }
            if (key === 'url') {
                var img = document.createElement('img');
                img.src = item[key]
                document.body.append(img);
                img.className = 'images'
            }
            if (key === 'description') {
                var div = document.createElement('div');
                div.innerHTML = item[key]
                document.body.append(div);
                div.className = 'text'
            }
        }
    }
  });

  
>>>>>>> Stashed changes

