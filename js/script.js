<<<<<<< Updated upstream
=======
//Task 1
/*
var i = 0;
function getIndexNumber(){
i++;  
return i; 
}

var elements = document.getElementsByClassName('zzz');

 for(var element of elements) {

     element.innerHTML = getIndexNumber();
 }
 */
//Task 2
//Version 1
/*
for (var elem of document.body.children) {
  var arrElem = elem.innerHTML.split('www')
  if (arrElem.length > 1) {
    elem.classList.add('color')
  }
}
*/
//Version 2
/*
for (var elem of document.body.children) {
  if(elem.innerHTML.includes('www')){
    elem.classList.add('color')
  }
  
}
*/
//Task 3
var ul = document.createElement('ul');

var elements = document.getElementsByClassName('zzz');
>>>>>>> Stashed changes

for (var element of elements) {
  var li = document.createElement('li');
  li.insertAdjacentHTML('afterbegin', element.innerHTML)
  ul.append(li);
}
document.body.prepend(ul);