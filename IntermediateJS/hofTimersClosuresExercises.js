/*Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value 
and console.logs it. Once the value is 0 it should log “DONE!” and stop.*/

//declare a timer var that runs every 1000 ms => setInterval 
    //decrement num 
    //if num is zero,
        //stop timer and console log done
    //else  
        //console log num

function countdown(num){
    let timer = setInterval(function(){
        num--;
        if(num === 0){
            clearInterval(timer);
            console.log('DONE!');
        }
        else{
            console.log(num);
        }
    }, 1000)
}

console.log(countdown(4));
// 3
// 2
// 1
// "DONE!"

/*Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a 
random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries 
it took before we found a number greater than .75.*/

//declare num var
//declare count var => will store times it takes to get a num greater than .75
//declare timer var for every 1000 ms -> setInterval
    //assign num to a random number using Math.random
    //increment count
    //if num is greater than 0.75
        //stop timer
        //console log the amount of tries it takes 

function randomGame(){
    let num;
    let count = 0;
    let timer = setInterval(function(){
        num = Math.random();
        count++;
        if(num > 0.75){
            clearInterval(timer);
            console.log("It took " + count + " try/tries.");
        }
    }, 1000);
}

/*Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not*/

function isEven(num){
    return num % 2 === 0;
}

isEven(2); // true
isEven(3); // false

/*Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not*/

function isOdd(num){
    return num % 2 !== 0;
}

isOdd(3); // true
isOdd(14); // false

/*Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 
and can only be divided in whole by itself and 1), otherwise returns false*/

//if number is less than 2,
    //return false
//iterate through num using for...loop
    //if num is divisible by any number in that range,
        //return false
//return true

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

isPrime(8); // false
isPrime(17); // true