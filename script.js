
function addTask() {
    let inputTask = document.getElementById("input-task");
    let text = inputTask.value;
    inputTask.value = "";
    
    let li = document.createElement("li");
    li.className = "task-box";
        
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox';
    checkBox.className = "custom-checkbox";
    checkBox.id = "checkbox"


    let taskSpan = document.createElement("span");
    taskSpan.className = "task";
    taskSpan.textContent = text;

    let buttonDel = document.createElement("button");
    buttonDel.className = "delete-btn";
    buttonDel.textContent = "Удалить задачу";
    buttonDel.addEventListener('click', delTask);

    li.append(checkBox, taskSpan, buttonDel);

    let taskList = document.getElementById("task-list")
    taskList.append(li);
}



function delTask(event) {
    event.preventDefault();
    let target = event.target;
    let item = target.closest('li');
    if (item) {
        item.remove();
    }
}

function init() {
    let buttonAdd = document.getElementById("add-task-button");
    buttonAdd.onclick = addTask;

    const TASKS = document.querySelectorAll('.delete-btn');
    TASKS.forEach((task) => {
        task.addEventListener('click', delTask);
    })
}

window.onload = init;