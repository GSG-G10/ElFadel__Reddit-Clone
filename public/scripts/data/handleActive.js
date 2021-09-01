const checkUser = () => {
  fetch('/user/checkUser', {
    method: 'GET',
  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
document.getElementById('upvote').addEventListener('click', () => {
  fetch('/comments/addVote', {
    method: 'POST',
  })
    .then((response) => response.json())
    .then(({ rows }) => {
      rows.forEach(({
        content, created_at: time, id, image, name, title, votes, number_comments,
      }) => {
        cardPost(image, name, time, title, content, number_comments, votes, votes, id);
      });
    });
});

document.getElementById('downvote').addEventListener('click', () => {
  fetch('/vote/decrease', {
    method: 'POST',
  })
    .then((response) => response.json())
    .then(({ rows }) => {
      rows.forEach(({
        content, created_at: time, id, image, name, title, votes, number_comments,
      }) => {
        cardPost(image, name, time, title, content, number_comments, votes, votes, id);
      });
    });
});
