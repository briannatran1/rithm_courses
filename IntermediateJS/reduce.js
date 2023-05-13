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

//convert target letter to lower case
//use reduce method
    //arguments => initialize acc (count) to 0, val
    //convert val to lowercase
    //if target letter and val are the same,
        //increment count
    //return count

function filterLetters(arr, letter){
    let lowerLetter = letter.toLowerCase();
    return arr.reduce(function(count, val){
        let lowerVal = val.toLowerCase();
        if(lowerLetter === lowerVal){
            count++;
        }
        return count;
    }, 0);
}

/*Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. T
his function should return the array of objects after each key and value has been added. You can do this a few ways, 
either by reducing starting with an empty array and making copies of the object or by starting with the actual array!*/

function addKeyAndValue(arr, key, value){
    
}