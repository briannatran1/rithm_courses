/*Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. 
You can do this either using window.onload or adding an event listener for DOMContentLoaded.*/
window.onload = function(){
    /*Replace the text “Change me” with “Hello World!”.*/
    let changeText = document.getElementById('change_heading');
    changeText.innerText = 'Hello World!';

    /*When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.*/
    let section = document.querySelector('section');
    section.addEventListener('mouseover', function(event){
        let selectedColor = document.querySelector('.selected');
        selectedColor.innerHTML = event.target.className;
    })

    /*Create a new div element.*/
    let newDiv = document.createElement('div');

    /*Give your new div a class of purple and style it so that it has a background color of purple.*/
    newDiv.className = 'purple';
    newDiv.style.backgroundColor = 'purple';

    /*Append your new div to the page to the section tag.*/
    section.appendChild(newDiv);

    /*Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one 
    of them is at the end of the screen. When one of the blocks reaches the end – you should alert “winner!”*/
    let button = document.querySelector('button');
    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    //racing portion
    button.addEventListener('click', function(event){ //adds event listener to button
        button.disabled = true; //prevents button from being clicked again until it resets
        car1.timer = setInterval(function(){ //updates position of car1 every 60ms
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 60 + 'px'; 
            if(parseInt(car1.style.marginLeft) > window.innerWidth){ //if marginLeft is bigger than browser screen, car wins
                alert('Car 1 wins!');
                reset(car1, car2); //reset race
            }
        }, 60);

        car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 60 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert('Car 2 wins!');
                reset(car1, car2);
            }
        }, 60);
    })

    //when one car reaches the end of the screen, reset
    function reset(car1, car2){
        clearTimeout(car1.timer); //stops animation of cars
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0; //resets both cars back to starting position
        car2.style.marginLeft = 0;
        button.disabled = false; //button can be pressed again
    }
}




