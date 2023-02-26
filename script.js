let textTodo;
let tableTodo;
let tableFinished;
let trTodo;
let tdThing;
let tdCheck;
let checkBox;


document.querySelector('.add').addEventListener('click', addTextTodo);
document.querySelector('.clear').addEventListener('click', ClearAll);

function addTextTodo() {
  textTodo = document.querySelector('.inputText');
  if (textTodo.value == '') return;
  tableTodo = document.querySelector('.table-todo');
  tableFinished = document.querySelector('.finished');

  trTodo = document.createElement('tr');
  trTodo.className = 'trTodo';
  tdThing =  document.createElement('td');
  tdThing.classList.add('todo');
  tdThing.textContent = textTodo.value;
  tdCheck = document.createElement('td');
  tdCheck.classList.add('check');
  checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.onchange = finish;
  
  tdCheck.append(checkBox);
  trTodo.append(tdThing);
  trTodo.append(tdCheck);
  tableTodo.append(trTodo);

  textTodo.value = ' ';

  let trSQA1 = document.querySelectorAll('.trTodo');
  let trMas1 = Array.from(trSQA1);
  // let save = localStorage.setItem('tr', JSON.stringify(trMas1));
  
}

function ClearAll() {
  let trSQA = document.querySelectorAll('.trTodo');
  let trMas = Array.from(trSQA);
  trMas.map(item => item.remove());
}


function finish() {
     tableFinished.append(this.parentElement.parentElement); // remove parent
     this.parentElement.remove();   
}







  

// for (let key in data.orders) {
//   let row = document.createElement('tr');
//   document.querySelector('tbody').append(row);
//   let cell1 = document.createElement('td'); cell1.textContent = `${data.orders[key].order_number}/${getUserTime(new Date(data.orders[key].order_date*1000))}`;
//   row.append(cell1);
//   console.log(cell1);
//   if( data.orders[key].order_rows.length > 1) {
//      cell1.setAttribute('rowspan', data.orders[key].order_rows.length );
//   }
//   for (let key2 in data.orders[key].order_rows) {
//     let cell2 = row.insertCell().textContent = `${data.orders[key].order_rows[key2].article}`;
//     let cell3 = row.insertCell().textContent = `${data.orders[key].order_rows[key2].brand}`;
//     let cell4 = row.insertCell().textContent = `${data.orders[key].order_rows[key2].description}`;
//     let cell5 = row.insertCell().textContent = `${data.orders[key].order_rows[key2].price}`;
//     let cell6 = row.insertCell().textContent = `${data.orders[key].order_rows[key2].count}`;
//     let cell7 = row.insertCell().textContent = cell5*cell6;
//   }
//  }

// let table = document.createElement('table');
// table.className = 'order';
// document.body.append(table);