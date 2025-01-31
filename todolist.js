const newtaskbox = document.getElementById("newtaskbox");
const taskInput = document.getElementById("tasklistform");
const newTaskForm = document.getElementById("newtaskform");
const newTaskPriority = document.getElementById("newtaskpriority");
const doneList = document.getElementById("donelist");
const deleteAllTaskButton = document.getElementById("deletealltask");
const toDoListContent = document.getElementById("todolist-list");
const doneListContent = document.getElementById("donelist-list");

function addTask(){
    const taskList = document.createElement("tr");

    addConfirmButton(taskList)
    addDate(taskList)    
    addTaskText(taskList);
    addTaskPriorityText(taskList)
    addRemoveButton(taskList)

    if (!newTaskForm.value && !newTaskPriority.value) {
        alert("Lengkapi data sebelum melakukan submit!");
        return
    }
  
    document.getElementById("todolist-list").appendChild(taskList);
    backToMenu();
    inputBarCleanup();
}

function deleteAllTask(){
     toDoListContent.innerHTML ="";
}

function deleteAllDoneTask(){
    doneListContent.innerHTML ="";
}

function addDate(taskList){
    const dateConverter = new Date()
    const dayString = dateConverter.toLocaleDateString('id-ID', { weekday: 'long' });
    const dateString = dateConverter.toLocaleDateString('id-ID', { timeZone: 'UTC' });
    const taskDateText = document.createElement("td")
    taskDateText.textContent = dayString +" "+ dateString
    taskList.appendChild(taskDateText)
}

function addTaskText(taskList){
    const newTaskSpan = document.createElement("span")
    const newTaskInput = document.getElementById("newtask").value;
    const newTaskText = document.createElement("td")
    newTaskSpan.textContent = newTaskInput;
    newTaskText.appendChild(newTaskSpan);
    taskList.appendChild(newTaskText);
}

function addTaskPriorityText(taskList){
    const newTaskPriority = document.getElementById("newtaskpriority").value;
    const newTaskPriorityText = document.createElement("td")
    newTaskPriorityText.textContent = newTaskPriority;
    taskList.appendChild(newTaskPriorityText);
}

function addRemoveButton(taskList){
    const removeButtonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "\u00D7";
    removeButton.classList.add("removetask"); 
    removeButton.onclick = () => removeTask(removeButton);
    removeButtonCell.appendChild(removeButton);
    taskList.appendChild(removeButtonCell); 
}

function addConfirmButton(taskList){
    const centangButtonCell = document.createElement("td");
    const centangButton = document.createElement("input");
    centangButton.type="checkbox"
    centangButton.classList.add("centangbutton"); 
    centangButton.onclick = () => lineThrough(centangButton, taskList)
    centangButtonCell.appendChild(centangButton); 
    taskList.appendChild(centangButtonCell);
}

function newTask(){
    taskInput.style.display = "none"; 
    newTaskForm.style.display = "flex";
    document.getElementById("todolist-form").style.display = "none";
    document.getElementById("todolist-list").style.display = "none";
    doneList.style.display = "none"
    document.getElementById("donelist-form").style.display = "none";
    document.getElementById("donelist-list").style.display = "none"
    document.getElementById("todolist-body").style.display = "none"

}

function showDoneList(){
    doneList.style.display = "flex"
    document.getElementById("donelist-form").style.display = "table";
    document.getElementById("donelist-list").style.display = "table-row-group";
    taskInput.style.display = "none"; 
    newTaskForm.style.display = "none";
    document.getElementById("todolist-form").style.display = "none";
    document.getElementById("todolist-list").style.display = "none";
    document.getElementById("todolist-body").style.display = "block"
}

function backToMenu(){
    taskInput.style.display = "flex"; 
    newTaskForm.style.display = "none";
    document.getElementById("todolist-form").style.display = "table";
    document.getElementById("todolist-list").style.display = "table-row-group";
    inputBarCleanup();
    doneList.style.display = "none"
    document.getElementById("donelist-form").style.display = "none";
    document.getElementById("donelist-list").style.display = "none"
    document.getElementById("todolist-body").style.display = "block"

}

function removeTask(removeButton){  
    removeButton.parentElement.parentElement.remove();
}

function inputBarCleanup(){
    document.getElementById("newtask").value = "";
    document.getElementById("newtaskpriority").value ="";
}

function lineThrough(centangButton, taskList) {
    const spanElement = centangButton.closest("tr").querySelector("span");
    spanElement.classList.toggle("checked");
    if (spanElement.classList.contains("checked")) {
        document.getElementById("donelist-list").appendChild(taskList);
    } else 
        document.getElementById("todolist-list").appendChild(taskList);
}