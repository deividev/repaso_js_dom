

function pintar(ulElement, tasks) {
  //eliminar nodos

  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
 }
 tasks.forEach(elem => {
    const li = document.createElement('li');
    const text = document.createTextNode(elem.text);
    const date = document.createTextNode(` ${elem.end.locale('es').format('LLLL')} `);
    li.appendChild(text);
    li.appendChild(date);
    li.classList.add("task");
    ulElement.appendChild(li);
 });
}

function addToDo(tasks, inputElement, ulElement, inputDate) {
  const text = inputElement.value;
  tasks.push({
      id: tasks.length,
      text: text,
      end: moment(inputDate),
      visible: true
  });
  pintar(ulElement, tasks, inputDate);
}

function addDeleteBtnElement() {
  const deleteNode = document.createElement('button');
  deleteNode.appendChild(document.createTextNode('Borrar'));
  deleteNode.addEventListener('click', deleteElement, {
      once: true
  })
  return deleteNode;
}
function addEditBtnElement () {
  const btnEdit = document.createElement('button');
  btnEdit.appendChild(document.createTextNode('Edit'));
  btnEdit.addEventListener("click", editElement, {once : true});
  btnEdit.classList.add('action-btn');
  return btnEdit;
}
function addDoneBtnElement () {
  const btnDone = document.createElement('button');
  btnDone.appendChild(document.createTextNode('Done'));
  btnDone.addEventListener("click", doneElement, {once : true})
  btnDone.classList.add('action-btn');
  return btnDone;
}

function addSaveBtnElement () {
  const btnSave = document.createElement('button');
  btnSave.appendChild(document.createTextNode('Save'));
  btnSave.addEventListener("click", saveElement, {once : true});
  btnSave.classList.add('action-btn');
  return btnSave;
}
function deleteElement(event) {
  //Otra forma de hacerlo
  //const li = e.target.parentElement;
  //const ul = li.parentElement;
  //ul.removeChild(li);
  miArray.removeChild(event.currentTarget.parentElement);
}
function doneElement(event) {
  //li.style.background = "#02db3c"
  const li = event.target.parentElement;
  li.classList.add('check');
  event.target.parentElement.removeChild(event.currentTarget);
}
function editElement(event) {
  const li = event.target.parentElement;
  const arr = li.childNodes;
  const liText = li.childNodes[0];
  const btnDone = li.childNodes[1];
  const btnEdit = li.childNodes[2];
  const btnDelete = li.childNodes[3];
  const btnSave = addSaveBtnElement();
  const input = document.createElement('input');
  input.setAttribute("id", "inputEdit");
  input.value = liText.textContent;
  li.removeChild(liText);
  li.insertBefore(input, btnDone);
  li.removeChild(btnEdit);
  li.insertBefore(btnSave, btnDelete);
}
function saveElement(event) {
  const li = event.target.parentElement;
  const input = li.childNodes[0];
  const inputValue = input.value;
  if (input.value === ''){
      alert("No dejes el campo vacio");
      return
  } 
  const btnSave = li.childNodes[2];
  const btnEdit = addEditBtnElement();
  const text = document.createTextNode(inputValue);
  li.insertBefore(text, input);
  li.removeChild(input);
  //btnEdit.removeEventListener('click', editElement);
  li.insertBefore(btnEdit, btnSave);
  li.removeChild(btnSave);
}

function addTodoEnter(event) {
  if (event.keyCode === 13){
      addToDo();
  } 
}
