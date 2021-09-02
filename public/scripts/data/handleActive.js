const checkUser = (cb) => {
  fetch('/user/checkUser', {
    method: 'GET',
  }).then((res) => res.json())
    .then((data) => cb(data)).catch(() => cb(false));
};

const voteUpDown = (endpoint) => {
  fetch(endpoint, {
    method: 'GET',
  }).then(() => {
    window.location.reload();
  });
};
