if (document.cookie) {
  const message = document.cookie.split('=')[1].replace(/%20/g, ' ');
  // display element
  const error = document.querySelector('#error');
  error.style.display = 'block';
  error.textContent = message;
  window.setTimeout(() => {
    error.style.display = 'none';
  }, 5000);
  document.cookie = 'message=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
