const btn = document.getElementById('btn');
const message = document.getElementById('message');

const responses = [
  'Hello, world!',
  'JavaScript is working perfectly.',
  'Edit app.js to change this message.',
  'Your starter app is ready to go!',
];

let index = 0;

btn.addEventListener('click', () => {
  message.textContent = responses[index % responses.length];
  index++;
});
