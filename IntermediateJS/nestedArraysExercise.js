/*Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the 
right. For the value at the end of the array, rotate should move it back to the beginning.*/

/*Take the last val and add to front of arr each time as needed */

//iterate using for...loop
    //pop last val from arr => declare 
    //add last val to beg of arr using unshift
//return arr

function rotate(arr, num){
    for(let i = 0; i < num; i++){
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}

console.log(rotate([1,2,3], 1)) // [3,1,2]
console.log(rotate([1,2,3], 2)) // [2,3,1]
console.log(rotate([1,2,3], 3)) // [1,2,3]

/*Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the 
number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The 
values in the sub-arrays should switch between "X" and "O".*/

/*First number will be how many subarrays there are in final array. Second number will be the length of each subarray. Fill each 
subarray by interchanging X and O. */

//declare result arr 
//declare isX var and initialize to true => checks if char is an X
//iterate through rows using for...loop
    //declare subarr var => subarr for final arr
    //iterate through amount using nested for...loop
        //if isX is true,
            //push X to subarr
        //else,
            //push O to subarr
        //set isX to false
    //push subarr to result arr
//return result

//input: numbers
//output: arr of arrs

function makeXOGrid(rows, amount){
    let result = [];
    let isX = true;
    for(let i = 0; i < rows; i++){
        let subarr = [];
        for(let j = 0; j < amount; j++){
            if(isX){
                subarr.push('X');
            }
            else{
                subarr.push('O');
            }
            isX = !isX;
        }
        result.push(subarr);
    }
    return result;
}

console.log(makeXOGrid(1,4)) //[["X","O","X","O"]]
console.log(makeXOGrid(3,2)) //[["X","O"],["X","O"],["X","O"]]
console.log(makeXOGrid(3,3)) //[["X","O","X"],["O","X","O"],["X","O","X"]]
