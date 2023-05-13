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

/**/ 

//

function printFirstAndLast(arr){

}

printFirstAndLast(['awesome','example','of','forEach'])
// ae
// ee
// of
// fh