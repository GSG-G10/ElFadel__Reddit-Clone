// name user from url
const user = window.location.pathname.split('/')[2];
fetch(`/user/profileInfo/${user}`, {
  method: 'GET',
})
  .then((response) => response.json())
  .then((res) => {
    res.forEach(({
      content, created_at: time, id, image, name, title, votes, number_comments,
    }) => {
      cardPost(image, name, time, title, content, number_comments, votes, id);
    });
  })
  .catch((err) => `sth error ${err}`);
