'use strict';

const hexBox = document.getElementById('hexBox');
const hexInput = document.getElementById('hexInput');

function pickColor(color) {
  document.body.style.background = color;
  hexBox.textContent = color;
}

function randomColor() {
  let letters = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  pickColor(color);
}

function resetColor() {
  pickColor('#f4b6b6');
  hexInput.value = '';
}

function applyColor() {
  const typed = hexInput.value;
  if (typed.length == 7 && typed.charAt(0) == '#') {
    pickColor(typed);
  } else {
    alert('Please enter a valid hex code like #3498db');
  }
}

function copyHex() {
  navigator.clipboard.writeText(hexBox.textContent);
  alert('Copied ' + hexBox.textContent);
}
