
function addTask(){
    /*Add the empty vessel for the task*/
    const taskList = document.createElement("li");

    /*Add the text for the task and trigger for line through*/
    const newTaskInput = document.getElementById("newtask").value;
    const newTaskText = document.createElement("span")
    newTaskText.textContent = newTaskInput;
    taskList.onclick = lineThrough;

    /*Prevent addition if newTaskInput is empty*/
    if(newTaskInput === "") {
        alert("Tugas Kosong. Isi Sesuatu.")
        return
    }

    /*clean the input bar*/
    document.getElementById("newtask").value = "";

    /*Add the remove button*/
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "\u00D7";
    removeButton.classList.add("removetask"); 
    removeButton.onclick = () => removeTask(removeButton);

    /* combine everything into the still empty li*/
    taskList.appendChild(newTaskText);
    taskList.appendChild(removeButton);

    /*return the whole assembled thing to the html*/
    document.getElementById("todolist-list").appendChild(taskList);

}

function removeTask(removeButton){  
    removeButton.parentElement.remove();
}

function lineThrough(event){
    let spanElement = event.currentTarget.querySelector("span");
    if(spanElement) {
        spanElement.classList.toggle("checked");
    }
    }