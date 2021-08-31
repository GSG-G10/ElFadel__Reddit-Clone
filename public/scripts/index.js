// get post from /post
fetch('/post/allPost', {
  method: 'GET',
})
  .then((response) => response.json())
  .then((res) => console.log('response', res))
  .catch((err) => console.log(err));
