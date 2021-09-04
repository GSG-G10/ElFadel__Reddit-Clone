const voteUpDown = (endpoint) => {
  fetch(endpoint, {
    method: 'GET',
  }).then(() => {
    window.location.reload();
  });
};
