const checkUser = (cb) => {
  fetch('/user/checkUser', {
    method: 'GET',
  }).then((res) => res.json())
    .then((data) => cb(data)).catch(() => cb(false));
};
