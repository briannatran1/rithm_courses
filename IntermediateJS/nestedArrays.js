//print all values in all arrays
let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10, 11, 12]];
for(let i = 0; i < nestedArr.length; i++){
    for(let j = 0; j < nestedArr[i].length; j++){
        console.log(nestedArr[i][j]);
    }
}

/*Given the following array, write a function called printEvens that console.logs all of the even numbers
let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

printEvens();

// 2
// 4
// 6
// 8
// 10
// 12*/

function printEvens(){
    let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
    for(let i = 0; i < nestedArr.length; i++){
        for(let j = 0; j < nestedArr[i].length; j++){
            if(nestedArr[i][j] % 2 === 0){
                console.log(nestedArr[i][j]);
            }
        }
    }
}
printEvens();

/*Given the following array, write a function called sumTotal returns the sum of all numbers in the array*/

//declare sum
//iterate through nested arr using nested for...loop
    //add each val to sum var
//return sum

function sumTotal(){
    let nestedArr = [[1, 2], [3, 4], [5, 6]];
    let sum = 0;
    for(let i = 0; i < nestedArr.length; i++){
        for(let j = 0; j < nestedArr[i].length; j++){
            sum += nestedArr[i][j];
        }
    }
    return sum;
}
sumTotal();

