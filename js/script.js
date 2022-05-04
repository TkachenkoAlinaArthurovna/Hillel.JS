<<<<<<< Updated upstream

=======
//Task 1

var arr = [{
        name: 'Vasya',
        age: 24
    },
    {
        name: 'Petya',
        age: 12
    },
    {
        name: 'Fedya',
        age: 6
    },
    {
        name: 'Ann',
        age: 18
    },
    {
        name: 'Nastya',
        age: 40
    }
]

arr.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
});

console.log(arr);


//Task 2
/*
var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];

function filterFalse(arr) {
    return arr.filter(function (value) {
        return !!value;
    });
}

console.log(filterFalse(arr));
*/
//Task 3
/*
var arr = [1, 2, 3, 2, 4, 5, 2];
var value = 2;

function find(arr, value) {

    return arr.reduce(function (accumulator, currentValue, index) {
        if (value === currentValue) {
            accumulator.push(index)
        }
        return accumulator;
    },[]);

}

console.log(find(arr,value));
*/
//Task 3
//Version 2
/*
var arr = [1, 2, 3, 2, 4, 5, 2];
var value = 2;

function find(arr, value) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            arr1.push(i);
        }
    }
    return arr1
}

console.log(find(arr, value));
*/
//Task 4
/*
rows = 3;
cols = 3;

function createMatrix(rows, cols) {
    var matrix = [];
    for (var row = 0; row < rows; row++) {
        if (matrix[row] === undefined){
            matrix[row] =[];
        }
            for (var col = 0; col < cols; col++) {
                var random = Math.ceil(Math.random() * 100);
                matrix[row][col] = random;
            }
    }
    return matrix;
}

console.log(createMatrix(rows, cols));
*/

//Task 5
/*
var arr = [1, [2],[3, [4]]];

function flatten(arr) {
    var test = [];
    for (i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (Array.isArray(item)) {
            var res = flatten(item)  
            test = test.concat(res)
        } else {
            test.push(item)
        }
    }
    return test;
}

console.log(flatten(arr));
*/
>>>>>>> Stashed changes
