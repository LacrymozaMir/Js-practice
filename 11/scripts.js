// Напишите функцию для получения имени и фамилии из формы

let form = document.forms[0];

let fname = form.elements.fname;
let lname = form.elements.lname;

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(fname.value);
  console.log(lname.value);
}

