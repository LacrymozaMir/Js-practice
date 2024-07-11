// Напишите функцию JavaScript для добавления строк в таблицу.

const table = document.getElementById('sampleTable');
let flag = 3;


function insert_Row() {
  const tdFirst = document.createElement('td');
  const tdSecond = document.createElement('td');
  const tr = document.createElement('tr');
  tdFirst.innerHTML = `Row${flag} cell${flag}`
  tdSecond.innerHTML = `Row${flag} cell${flag}`

  tr.appendChild(tdFirst);
  tr.appendChild(tdSecond);

  table.appendChild(tr);

  flag++;
}