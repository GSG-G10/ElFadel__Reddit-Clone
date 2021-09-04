// name user from url
const user = window.location?.pathname?.split('/')[2];
const endpoint = user ? `/user/profileInfo/${user}` : '/post/allPost';
fetch(endpoint, {
  method: 'GET',
})
  .then((response) => response.json())
  .then((rows) => {
    rows.forEach(({
      content, created_at: time, id, image, name, title, votes, number_comments,
    }) => {
      cardPost(image, name, time, title, content, number_comments, votes, id);
    });
  })
  .catch((err) => `sth error ${err}`);
