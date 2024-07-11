// Напишите программу на JavaScript для вычисления объема сферы.

let form = document.forms.calcForm;

let radius = form.elements.radius;
let volume = form.elements.volume;
let val = 0;

form.onsubmit = (event) => {
  event.preventDefault();

  volume.value = 0.75 * 3.14 * (radius.value)**3;
}