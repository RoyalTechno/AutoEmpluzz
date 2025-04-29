const button = document.getElementById('colorButton');

let isBlue = false;

button.addEventListener('click', () => {
  if (isBlue) {
    button.style.backgroundColor = '';
    button.style.color = '';
  } else {
    button.style.backgroundColor = '#4285F4'; // Google Blue
    button.style.color = 'white';
  }
  isBlue = !isBlue;
});