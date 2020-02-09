describe("index.js", function () {
  beforeEach(function () {
    const ul = document.createElement('ul'); 
    const input = document.createElement('input');
    input.id = 'input';
    const addButton = document.createElement('button');
    addButton.id = 'button';

  })
  describe("pintar", function () {
    it("should remove all li before paint", function () {
      const dummyElement = document.createElement('ul');
      dummyElement.innerHTML = `<li>hola, un li de ejemplo</li>`;
      
      const tasks = [];
      pintar(dummyElement, tasks);
      expect(dummyElement.innerHTML).toEqual('')
    });


    it("should paint all data in array", function () {
      
      const dummyElement = document.createElement('ul');
      const tasks = [{
        id: 0,
        text: 'Hola',
        end: new Date(),
        visible: true
      }];
      
      pintar(dummyElement, tasks);
      
      expect(dummyElement.innerHTML).not.toEqual('');
      expect(dummyElement.innerHTML).toEqual('<li class="task">Hola</li>');
    })
  })
})


describe("addToDo", function () {
  it("should add and item", function () {
    const tasks = [];
    const inputElement = document.createElement('input');
    inputElement.value = 'Hola';
    const ulElement = document.createElement('ul');
    const dates = moment();
    debugger
    addToDo(tasks, inputElement, ulElement, dates);
    expect(tasks.length, dates).toEqual(1);
  })

})