window.onload = function(){
    let todoForm = document.getElementById('newTodoForm');
    let todoList = document.getElementById('todoList');
    
    todoForm.addEventListener('submit', function(event){ //when we click subumit button, 
        event.preventDefault(); //prevents page from reloading

        let removeButton = document.createElement('button'); //creates a remove button for each task
        removeButton.innerText = 'X'; //represents remove button

        let newTodo = document.createElement('li'); 
        newTodo.innerText = document.getElementById('task').value;

        todoList.appendChild(newTodo); //adds item to list
        newTodo.appendChild(removeButton); //adds remove button to each task
        todoForm.reset(); //resets form
    })

    todoList.addEventListener('click', function(event){
        if(event.target.tagName.toLowerCase() === 'li'){ //if we click the task, 
            event.target.style.textDecoration = 'line-through'; //applies a strikethrough effect 
        }
        else if(event.target.tagName.toLowerCase() === 'button'){ //if we click the remove button in the todo list, 
            event.target.parentNode.remove(); //removes list item from todo list
        }
    })
}

