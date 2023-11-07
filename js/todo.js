const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDo();
}

function paintTodo(todoIVObj) {
  const li = document.createElement("li");
  li.id = todoIVObj.id;
  const span = document.createElement("span");
  span.className = "todo-list-span";
  span.innerText = todoIVObj.Text;
  const button = document.createElement("button");
  button.innerText = "×";
  button.className = "delete-button";
  button.addEventListener("click", deleteTodo);
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function todoInputSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  const todoIVObj = {
    Text: todoInputValue,
    id: Date.now(),
  };
  toDos.push(todoIVObj);
  paintTodo(todoIVObj);
  saveToDo();
}

todoForm.addEventListener("submit", todoInputSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo !== null) {
  const parsedTodos = JSON.parse(savedToDo);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
