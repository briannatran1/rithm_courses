let arr = [1,2,3,4];
let anythingGreaterThanTwo = arr.some(function(val){
    return val > 2;
});

let anyStrings = arr.some(function(val){
    return typeof val === 'string';
});

anythingGreaterThanTwo; // true
anyStrings; // false

let everythingGreaterThanTwo = arr.every(function(val){
    return val > 2;
});

let everythingLessThanFive = arr.every(function(val){
    return val < 5;
});

everythingGreaterThanTwo; // false
everythingLessThanFive; // true

//

let arr2 = [-3, 1, 8, 4];
let firstValueGreaterThanTwo = arr2.find(function(val){
    return val > 2;
});

firstValueGreaterThanTwo; // 8

let firstIndexOfElementGreaterThanTwo = arr2.findIndex(function(val){
    return val > 2;
});

firstIndexOfElementGreaterThanTwo; // 2