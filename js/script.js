<<<<<<< Updated upstream

=======
//Task 1

var arr = [2, 3, 4, 5, 6, 7, ];

function sum(arr) {
    
    var el = arr.pop();
    if (arr.length) {
        return el + sum(arr);
    }
    else {return el;}
}

console.log(sum(arr));

//Task 2

/*
//Вариант без рекурсии

var arr = [2, 3, 4, 5, 6, 7, ];

function toSum(startIndex, endIndex, step){
    var result = 0;
    for (var i = startIndex;i <= endIndex;i = i + step) {
        result = result + (arr[i]);
    }
        return result
}

console.log(toSum(1, 5, 2));

*/

var arr = [2, 3, 4, 5, 6, 7, ];

function toSum(startIndex, endIndex, step) {
    var result = [];
    for (var i = startIndex; i <= endIndex; i = i + step) {
        result.push(arr[i])
    }

    function sum(result) {

        var el = result.pop();
        if (result.length) {
            return el + sum(result);
        } else {
            return el;
        }
    }
    return sum(result);
}

console.log(toSum(1, 5, 2));
>>>>>>> Stashed changes
