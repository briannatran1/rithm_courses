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

