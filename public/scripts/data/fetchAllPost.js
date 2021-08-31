// get post from /post
fetch('/post/allPost', {
  method: 'GET',
})
  .then((response) => response.json())
  .then(({ rows }) => {
    rows.forEach(({
      content, created_at: time, id, image, name, title, user_id, votes,
    }) => {
      // userImage, userName, time, titlePost, contentPost, numberComments, votes
      cardPost(image, name, time, title, content, 0, votes, votes);
    });
  });
