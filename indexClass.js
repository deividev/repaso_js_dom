function pintar(ulElement, tasks) {
  //eliminar nodos

  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
 }
 tasks.forEach(elem => {
    const li = document.createElement('li');
    const text = document.createTextNode(elem.text);
    const dates = document.createTextNode(` ${elem.end.locale('es').format('LLLL')} `);
    li.appendChild(text);
    li.appendChild(dates);
    li.classList.add("task");
    ulElement.appendChild(li);
 });
}

function addToDo(tasks, inputElement, ulElement,dates) {
  const text = inputElement.value;
  tasks.push({
      id: tasks.length,
      text: text,
      end: moment(dates),
      visible: true
  });
  pintar(ulElement, tasks, dates);
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

function addTodoEnter(event) {
    if (event.keyCode === 13){
        addToDo();
    } 
}
