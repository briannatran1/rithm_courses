function outer(a){
    return function inner(b){
        return a + b;
    }
}

outer(5) // this returns the inner function

// this calls the inner function right away
outer(5)(2) // 7

// we can store the inner function in a variable
let laterAdd = outer(10)

// we can now call that inner function
laterAdd(15) // 25

/*but how was the inner function able to remember the parameter "a" defined in the outer function which already returned? 
The answer is through closure.*/

function createInstructors(){
    let instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
}

let firstClass = createInstructors();
firstClass.addInstructor("Jennifer");
firstClass.showInstructors(); // ["Elie", "Matt", "Tim", "Jennifer"]

let secondClass = createInstructors(); //will not contain added Jennifer string since instructors is a private var
secondClass.addInstructor("Ashley"); // ["Elie", "Matt", "Tim", "Ashley"]

// on one line

let instructors = createInstructors().showInstructors(); ["Elie", "Matt", "Tim"]

//

let instructorModuleRefactored = (function createInstructors(){
    let instructors = ["Elie", "Matt", "Tim"]; //private var => nobody can modify it
    function displayAllInstructors(){
        return instructors;
    }
    function addNewInstructor(instructor){
        instructors.push(instructor);
        return instructors;
    }
    return {
        showInstructors: displayAllInstructors,
        addInstructor: addNewInstructor
    }
})();

/*Write a function called createCounter. This function should contain a variable count that is initialized to 0. 
This function should return another function that when invoked, increments the counter by 1 and returns the count variable. 
You should be able to create multiple counters with the createCounter function and they should all have their own private variable 
called count.*/
function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let firstCounter = createCounter();

firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

let secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4