let timerId = setInterval(function(){
    console.log("HI!");
},1000);

setTimeout(function(){
   clearTimeout(timerId);
},3000);

//Event loop:
console.log("first");
setTimeout(function(){
    console.log("second");
},0);
console.log("third");

//What is the difference between setInterval and setTimeout?
setInterval //run an infinite amount of times (until timer is cleared)
setTimeout //only run callback function to be executed once

//What is the difference between using setInterval and a loop? Why would you want to choose one over the other?
/*You would choose setInterval when you want to schedule the execution of a function repeatedly at a specified interval 
asynchronously, without blocking the main thread. On the other hand, you would choose a loop when you want to iterate over 
a collection of elements or perform a series of operations sequentially in a synchronous manner.*/

//What is the first parameter that setInterval and setTimeout accept?
/*First parameter = callback function
Second parameter = time in milliseconds */

//Why is it so important to store the result of setInterval and setTimeout in a variable?
/*So you have control over the timers and can maniupulate them if needed, like using clearTimeout or clearInterval.*/

//What does asynchronous mean in the context of setTimeout and setInterval?
/*When a piece of code is asynchronous, it means that it doesn't block the execution of subsequent code or the main thread while it 
is waiting for a certain operation to complete. Instead, it allows the program to continue running and execute other code concurrently.*/
