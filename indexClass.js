function pintar(ulElement, tasks) {
  //eliminar nodos

  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
 }
 tasks.forEach(elem => {
    const li = document.createElement('li');
    const text = document.createTextNode(elem.text);
    //const dates = document.createTextNode(` ${elem.end.locale('es').format('LLLL')} `);
    li.appendChild(text);
    //li.appendChild(dates);
    li.classList.add("task");
    ulElement.appendChild(li);
 });
}

function addToDo(tasks, inputElement, ulElement) {
  const text = inputElement.value;
  tasks.push({
      id: tasks.length,
      text: text,
      end: new Date(),
      visible: true
  });
  pintar(ulElement, tasks);
}

function addDeleteBtnElement() {

}

function addEditBtnElement() {

}

function addDoneBtnElement() {

}

function addDoneBtnElement() {

}

function doneElement(e) {

}

function editElement(e) {

}

function saveElement(e) {

}

function addTodoOnEnter(e) {

}


