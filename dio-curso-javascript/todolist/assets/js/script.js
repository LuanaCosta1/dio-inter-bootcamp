let taskInput = document.getElementById("taskInput");
let taskAddBtn = document.getElementById("taskAddBtn");

if(taskInput.value != ' '){
  taskAddBtn.addEventListener("click", function createTask() {
    let todoList = document.getElementById("todo-list");
    let taskDiv = document.createElement("div");
    let checkbox = document.createElement("input");
    let taskContent = document.createElement("label");
  
    checkbox.type = "checkbox";
    checkbox.id = "taskCheckbox";
  
    taskContent.setAttribute("for", checkbox);
    taskContent.className = "taskContent";
    taskContent.appendChild(document.createTextNode(taskInput.value));
  
    taskDiv.className = "taskDiv";
    taskDiv.append(checkbox, taskContent);
  
    todoList.append(taskDiv);

    taskInput.value = ' ';
  });
}
