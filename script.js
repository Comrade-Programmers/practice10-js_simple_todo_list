var todoValueList = [];

function addTodo(event) {
  //prevent form submit from reloading the page
  event.preventDefault();

  // get the todo text entered
  const todoValue = document.getElementsByTagName('input')[0].value;

  //validations
  //is empty
  if (!todoValue)
    return;

  //already exist
  if (todoValueList.find(currentTodo => currentTodo.toLocaleLowerCase() == todoValue.toLocaleLowerCase()))
    return;

  //add to todo list
  todoValueList.push(todoValue);

  //create an html element for the todo list item
  const todoEl = document.createElement('li');

  //set the text of the list item
  todoEl.innerHTML = `<span class='numb'><b>${todoValueList.length}</b></span> <span>${todoValue}</span></li>`

  //add the list item to the list
  document.getElementsByTagName('ul')[0].appendChild(todoEl)

  //clear input
  document.getElementsByTagName('input')[0].value = "";
}