// name user from url
const user = window.location.pathname.split('/')[2];
fetch(`/user/profileInfo/${user}`, {
  method: 'GET',
})
  .then((response) => response.json())
  .then((res) => console.log('response', res))
  .catch((err) => console.log(err));
