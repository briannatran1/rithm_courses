/*Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! 
As a super bonus, try to also save todos that you have marked as complete!*/

window.onload = function(){
    let todoForm = document.getElementById('newTodoForm');
    let todoList = document.getElementById('todoList');

    //retrieve from localStorage
    let savedTodos = JSON.parse(localStorage.getItem('todos')) || [] //retrives value of key 'todos' or assign empty arr
    for(let i = 0; i < savedTodos.length; i++){ //processes each saved todo item
        let newTodo = document.createElement('li'); //create new li elem for each item
        newTodo.innerText = savedTodos[i].task; //
        newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
        if(newTodo.isCompleted){
            newTodo.style.textDecoration = 'line-through';
        }
        todoList.appendChild(newTodo);
    }
    todoForm.addEventListener('submit', function(event){
        event.preventDefault();
        let newTodo = document.createElement('li'); //represents new todo item
        let taskValue = document.getElementById('task').value; 
        newTodo.innerText = taskValue; //adds text to new todo item
        newTodo.isCompleted = false; //todo item is not completed initially when adding it 
        todoForm.reset(); //resets form
        todoList.appendChild(newTodo); //adds todo item to todoList elem

        //save to localStorage
        savedTodos.push({task: newTodo.innerText, isCompleted: false}); //new object is added to savedTodos arr
        localStorage.setItem('todos', JSON.stringify(savedTodos)); //arr gets converted into a str and item is saved in localStorage
    })
    todoList.addEventListener('click', function(event){
        let clickedListItem = event.target;
        if(!clickedListItem.isCompleted){
            clickedListItem.style.textDecoration = 'line-through';
            clickedListItem.isCompleted = true;
        }
        else{
            clickedListItem.style.textDecoration = 'none';
            clickedListItem.isCompleted = false;
        }

        //breaks for duplicates - another option is to have dynamic IDs
        for(let i = 0; i < savedTodos.length; i++){
            if(savedTodos[i].task === clickedListItem.innerText){
                savedTodos[i].isCompleted = clickedListItem.isCompleted;
                localStorage.setItem('todos', JSON.stringify(savedTodos));
            }
        }
    });
}