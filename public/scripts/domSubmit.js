const isPrivate = document.getElementById('isPrivate');
const content = document.getElementById('content');
const title = document.getElementById('title');
const formSubmit = document.getElementById('form-post');

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  sendData(title.value, content.value, isPrivate.checked);
});
