const apiurl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiurl + '?_limit=5')
    .then((response) => response.json())
    .then((data) => data.forEach((todo) => addTodoToDOM(todo)));
};

const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }
  document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  console.log(1);
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

init();
