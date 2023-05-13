/*Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array 
with just the values for that key:*/

//use reduce method that accepts 2 arguments, acc and obj => acc = []
    //if key is in obj,
        //push value to acc
    //return acc

function extractKey(arr, key){
    arr.reduce(function(acc, obj){
        if(key in obj){ //searching for 'name' key in obj
            acc.push(obj[key]); //push associated value to acc, which is an arr
        }
        return acc; //['Elie', 'Tim', 'Matt']
    }, []);
}

extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
// ["Elie", "Tim", "Matt"]


/*Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. 
This function should be case insensitive*/

function filterLetters(arr, letter){

}