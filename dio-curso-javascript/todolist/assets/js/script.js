let taskInput = document.getElementById("taskInput");
let taskAddBtn = document.getElementById("taskAddBtn");

taskAddBtn.addEventListener("click", function createTask() {
  let todoList = document.getElementById("todo-list");

  let taskContent = document.createElement("p");
  taskContent.className = "taskContent";
  taskContent.appendChild(document.createTextNode(taskInput.value));

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "taskCheckbox";

  let taskDiv = document.createElement("div");
  taskDiv.className = "taskDiv"
  taskDiv.append(checkbox, taskContent);

  todoList.append(taskDiv);
});
