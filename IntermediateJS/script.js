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
    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');

    
}




