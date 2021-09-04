// time hour ago 2021-08-31 16:11:55.329675
const timeAgo = (time) => {
  const now = new Date().getTime();
  const date = new Date(time);
  const diff = (now - date);

  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  return diffHours;
};
