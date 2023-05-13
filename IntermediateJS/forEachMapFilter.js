/*Write a function called double which accepts an array. The function should return a new array with all of the values doubled.*/

/*Go through each val in arr, and double it. Push result to new array*/

//declare result arr
//iterate through each val in arr using forEach and double val
    //push the doubled val to result
//return result

function double(arr){
    let result = [];
    arr.forEach(function(val){
        result.push(val * 2);
    });
    return result;
}

/*Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first 
character and the last character of each value.*/

//declare str var 
//iterate through arr using forEach 
    //add first char and last char of str to str var
    //console log str

function printFirstAndLast(arr){
    let str = '';
    arr.forEach(function(str){
        str = str[0] + str[str.length - 1];
        console.log(str);
    });
}

printFirstAndLast(['awesome','example','of','forEach'])
// ae
// ee
// of
// fh

/*Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. 
This function should return the array of objects after each key and value have been added to each object in the array.*/

/**/ 

//iterate through arr using forEach
    //assign 'val' value to each key in obj
//return modified arr

function addKeyAndValue(arr, key, val){
    arr.forEach(function(obj){
        obj[key] = val;
    });
    return arr;
}

addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true)
/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/

/*Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by 
the index it is at in the array:*/

function valTimesIndex(arr){
    return arr.map(function(val, index){
        return val * index;
    });
}

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([5,10,15]) // [0,10,30]

/*Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an 
array with just the values for that key:*/

function extractKey(arr, key){
    return arr.map(function(obj){
        return obj[key];
    });
}

extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")
// ["Elie", "Tim", "Matt"]