/*Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! 
As a super bonus, try to also save todos that you have marked as complete!*/

window.onload = function(){
    let todoForm = document.getElementById('newTodoForm');
    let todoList = document.getElementById('todoList');

    //retrieve from localStorage
    let savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    for(let i = 0; i < savedTodos.length; i++){
        let newTodo = document.createElement('li');
        newTodo.innerText = savedTodos[i].task;
        newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
        if(newTodo.isCompleted){
            newTodo.style.textDecoration = 'line-through';
        }
        todoList.appendChild(newTodo);
    }
    todoForm.addEventListener('submit', function(event){
        event.preventDefault();
        let newTodo = document.createElement('li');
        let taskValue = document.getElementById('task').value;
        newTodo.innerText = taskValue;
        newTodo.isCompleted = false;
        todoForm.reset();
        todoList.appendChild(newTodo);

        //save to localStorage
        savedTodos.push({task: newTodo.innerText, isCompleted: false});
        localStorage.setItem('todos', JSON.stringify(savedTodos));
    })
    
}