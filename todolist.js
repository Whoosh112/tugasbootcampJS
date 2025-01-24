const newtaskbox = document.getElementById("newtaskbox")
const taskInput = document.getElementById("tasklistform");
const newTaskForm = document.getElementById("newtaskform");
const newTaskPriority = document.getElementById("newtaskpriority");


function addTask(){
    /*Add the empty vessel for the task*/
    const taskList = document.createElement("tr");

    /*Add the text for the task and trigger for line through*/
    const newTaskInput = document.getElementById("newtask").value;
    const newTaskText = document.createElement("td")
    newTaskText.textContent = newTaskInput;
    taskList.onclick = lineThrough;

    /*Add the text for the task priority and trigger for line through*/
    const newTaskPriority = document.getElementById("newtaskpriority").value;
    const newTaskPriorityText = document.createElement("td")
    newTaskPriorityText.textContent = newTaskPriority;
    taskList.onclick = lineThrough;

    /*Prevent addition if inputs is empty*/
    if(newTaskInput === "" || newTaskPriority === "") {
        alert("Tugas Kosong. Isi Sesuatu.")
        return
    }

    inputBarCleanup();

    /*Add the remove button*/
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "\u00D7";
    removeButton.classList.add("removetask"); 
    removeButton.onclick = () => removeTask(removeButton);

    /* combine everything into the still empty li*/
    taskList.appendChild(newTaskText);
    taskList.appendChild(newTaskPriorityText);
    taskList.appendChild(removeButton);

    /*return the whole assembled thing to the html*/
    document.getElementById("todolist-list").appendChild(taskList);
    backToMenu();
}

function newTask(){
        taskInput.style.display = "none"; 
        newTaskForm.style.display = "flex";
        document.getElementById("todolist-list").style.display = "none";
}

function backToMenu(){
    taskInput.style.display = "flex"; 
    newTaskForm.style.display = "none";
    document.getElementById("todolist-list").style.display = "block";
    inputBarCleanup();
}

function removeTask(removeButton){  
    removeButton.parentElement.remove();
}

function inputBarCleanup(){
    document.getElementById("newtask").value = "";
}

function lineThrough(event){
    let spanElement = event.currentTarget.querySelector("span");
    if(spanElement) {
        spanElement.classList.toggle("checked");
    }
    }