const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(todoInputValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todoInputValue;
  const button = document.createElement("button");
  button.innerText = "×";
  button.addEventListener("click", deleteTodo);
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function todoInputSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  paintTodo(todoInputValue);
}

todoForm.addEventListener("submit", todoInputSubmit);
