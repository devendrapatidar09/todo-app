let todoList = [
  {
    item : 'buy milk',
    dueDate:'21/03/2025'
  },
  {
    item :'go to college',
    dueDate:'21/03/2025'
  }
];

displayItems()


function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
 todoList.push({item: todoItem, dueDate:todoDate});
 inputElement.value = '';
 dateElement.value = '';

 displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');

let newHtml = '';

for (let i =0; i < todoList.length; i++) {
  
  let {item, dueDate} = todoList[i];
  newHtml += `
  
  <span>${item}</span>
    <span>${dueDate}</span>

  <button  class="btn-delete"  onclick="todoList.splice(${i}, 1); displayItems();" >delete</button>
 
  `;

  }
  containerElement.innerHTML = newHtml;
 
}