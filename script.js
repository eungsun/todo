const button = document.querySelector("#submit-todo-btn");
const input = document.querySelector("#todo-field");
const ul = document.querySelector("ul");

function addTask() {
  const item = document.createElement("li");
  item.innerHTML = input.value;
  ul.appendChild(item);
}

button.addEventListener("click", addTask);
