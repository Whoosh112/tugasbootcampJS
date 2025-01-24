const newtaskbox = document.getElementById("newtaskbox")
const taskInput = document.getElementById("tasklistform");
const newTaskForm = document.getElementById("newtaskform");
const newTaskPriority = document.getElementById("newtaskpriority");


function addTask(){
    /*Buat wadah kosong untuk data*/
    const taskList = document.createElement("tr");

    addComfirmButton(taskList)
    addDate(taskList)    
    addTaskText(taskList);
    addTaskPriorityText(taskList)
    addRemoveButton(taskList)

    /*Prevent addition if inputs is empty*/
    antiEmptyChecker(taskList)
  
    /*return the whole assembled thing to the html*/
    document.getElementById("todolist-list").appendChild(taskList);
    backToMenu();
    inputBarCleanup();
}

function newTask(){
    taskInput.style.display = "none"; 
    newTaskForm.style.display = "flex";
    document.getElementById("todolist-form").style.display = "none";
    document.getElementById("todolist-list").style.display = "none";
}

function backToMenu(){
    taskInput.style.display = "flex"; 
    newTaskForm.style.display = "none";
    document.getElementById("todolist-form").style.display = "table";
    document.getElementById("todolist-list").style.display = "table-row-group";
    inputBarCleanup();
}

function removeTask(removeButton){  
    removeButton.parentElement.parentElement.remove();
}

function inputBarCleanup(){
    document.getElementById("newtask").value = "";
    document.getElementById("newtaskpriority").value ="";
}

function lineThrough(event){
    let spanElement = event.currentTarget.querySelector("span");
    if(spanElement) {
        spanElement.classList.toggle("checked");
    }
    }

function addDate(taskList){
    const dateConverter = new Intl.DateTimeFormat('id-ID').format(new Date())
    const taskDateText = document.createElement("td")
    taskDateText.textContent = dateConverter
    taskList.appendChild(taskDateText)
}

function addTaskText(taskList){
    const newTaskInput = document.getElementById("newtask").value;
    const newTaskText = document.createElement("td")
    newTaskText.textContent = newTaskInput;
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
    removeButtonCell.appendChild(removeButton); // Add the button inside the cell
    taskList.appendChild(removeButtonCell); // Append the cell to the row
}
function addComfirmButton(taskList){
    const centangButtonCell = document.createElement("td");
    const centangButton = document.createElement("button");
    centangButton.innerHTML = "V";
    centangButton.onclick = () => lineThrough;
    centangButtonCell.appendChild(centangButton); 
    taskList.appendChild(centangButtonCell);
}

function antiEmptyChecker(taskList){
    if(taskList.newTaskInput === "" || taskList.newTaskPriority === "") {
        alert("Tugas Kosong. Isi Sesuatu.")
        return
    }
}