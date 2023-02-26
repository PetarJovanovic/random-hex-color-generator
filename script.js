const body = document.querySelector('body');
const result = document.querySelector('.color');
const generate = document.querySelector('.generate');

function randomColor() {
  return Math.random().toString(16).substring(2, 8);
}

function setColor() {
  const hexColor = randomColor();
  result.innerHTML = `#${hexColor}`;
  body.style.backgroundColor = `#${hexColor}`;
}

generate.addEventListener('click', setColor);
