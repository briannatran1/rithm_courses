/*Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. 
You can do this either using window.onload or adding an event listener for DOMContentLoaded.*/
window.onload = function(){

}

/*Replace the text “Change me” with “Hello World!”.*/
let changeText = document.getElementById('change_heading');
changeText.innerText = 'Hello World!';

/*When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.*/
