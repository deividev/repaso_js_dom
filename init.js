/* Integration */
const tasks = [];
const inputElement = document.getElementById('input');
const ulElement = document.getElementById('list');
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', (e) => {
  addToDo(tasks, inputElement, ulElement);
});