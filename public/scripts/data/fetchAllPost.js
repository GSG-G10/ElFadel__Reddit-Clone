// get post from /post
fetch('/post/allPost', {
  method: 'GET',
})
  .then((response) => response.json())
  .then(({ rows }) => {
    rows.forEach(({
      content, created_at: time, id, image, name, title, votes, number_comments,
    }) => {
      cardPost(image, name, time, title, content, number_comments, votes, votes, id);
    });
  });
