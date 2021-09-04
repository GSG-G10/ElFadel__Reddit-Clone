const sendData = (title, content, isPrivate) => {
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      content,
      title,
      isPrivate,
    }),
  }).then(() => {
    window.location.href = '/';
  });
};
