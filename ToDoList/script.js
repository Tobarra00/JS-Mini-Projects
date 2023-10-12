const tasks = document.getElementsByClassName('tasks');
const taskName = document.getElementById('task-name');


function createTask() {
    if(taskName.value) {
        const newTask = document.createElement('div');
        newTask.classList.add('task');

        const taskText = document.createElement('p');
        const icons = document.createElement('div');

        newTask.appendChild(taskText);
        newTask.appendChild(icons);

        let check = document.createElement('i');
        check.classList.add('bi', 'bi-check');
        check.addEventListener('click', checkTask);

        let remove = document.createElement('i');
        remove.classList.add('bi', 'bi-trash');
        remove.addEventListener('click', removeTask);

        icons.append(check, remove);
    
        taskText.innerText = taskName.value;
        taskName.value = '';  
        
        return tasks[0].append(newTask);
    }
    return alert('Introduce a task name.');
}

function checkTask(e) {
    e.target.parentNode.previousSibling.classList.toggle('checked');
}

function removeTask(e) {
    e.target.parentNode.parentNode.remove();
}

document.getElementById('create').addEventListener('click', createTask);
