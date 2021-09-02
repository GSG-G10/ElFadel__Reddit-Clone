const containerPosts = document.getElementsByClassName('reddit__public__content');
const helperBar = document.getElementsByClassName('header-wrapper-right');
const logSign = document.getElementsByClassName('login-signup');
const inputPost = document.getElementById('post');
const upvote = document.getElementById('upvote');
const profileImage = document.getElementById('profile-image');
const userName = document.getElementById('user-name');
const userProfile = document.getElementById('user-details');

// card post
const cardPost = (userImage, name, time, titlePost, contentPost, numberComments, votes, id) => {
  const postElement = document.createElement('div');
  postElement.setAttribute('id', `${id}`);
  postElement.classList.add('reddit__public__content__post');
  const headerPost = document.createElement('div');
  headerPost.classList.add('reddit__public__content__post__header');
  const user = document.createElement('div');
  user.classList.add('reddit__public__content__post__header__user');
  const userImageElement = document.createElement('img');
  userImageElement.setAttribute('src', userImage);
  userImageElement.setAttribute('alt', 'some one person');
  userImageElement.classList.add('user-image');
  const userInfo = document.createElement('div');
  userInfo.classList.add('reddit__public__content__post__header__user__info');
  const userNameElement = document.createElement('h3');
  const userNameLink = document.createElement('a');//
  userNameLink.textContent = name;
  userNameLink.setAttribute('href', `/user/${name}`);
  userNameLink.textContent = name;
  userNameElement.appendChild(userNameLink);
  const userTime = document.createElement('h5');
  userTime.classList.add('time');
  userTime.textContent = `${timeAgo(time)}hours ago`;
  const title = document.createElement('div');
  title.classList.add('reddit__public__content__post__header');
  title.textContent = titlePost;
  const content = document.createElement('div');
  content.classList.add('reddit__public__content__post__content');
  content.textContent = contentPost;
  const hr = document.createElement('hr');
  const footer = document.createElement('div');
  footer.classList.add('reddit-post-footer');
  const comments = document.createElement('span');
  comments.id = 'comments';
  comments.innerHTML = `<i class="far fa-comment-alt"></i>${numberComments} Comments`;
  const upvote = document.createElement('span');
  upvote.id = 'upvote';
  upvote.addEventListener('click', () => {
    voteUpDown(`/post/upVote/${id}`);
  });
  upvote.innerHTML = '<i class="fas fa-arrow-up"></i>Upvote';
  const numbervote = document.createElement('span');
  numbervote.id = 'numbervote';
  numbervote.textContent = votes;
  const downvote = document.createElement('span');
  downvote.id = 'downvote';
  downvote.addEventListener('click', () => {
    voteUpDown(`/post/downVote/${id}`);
  });
  downvote.innerHTML = '<i class="fas fa-arrow-down"></i>Downvote';
  const deletePost = document.createElement('span');
  deletePost.id = 'delete';
  deletePost.innerHTML = '<i class="fas fa-trash"></i>Delete';
  user.appendChild(userImageElement);
  userInfo.appendChild(userNameElement);
  userInfo.appendChild(userTime);
  user.appendChild(userInfo);
  headerPost.appendChild(user);
  headerPost.appendChild(title);
  headerPost.appendChild(content);
  postElement.appendChild(headerPost);
  postElement.appendChild(hr);
  footer.appendChild(comments);
  footer.appendChild(upvote);
  footer.appendChild(numbervote);
  footer.appendChild(downvote);
  footer.appendChild(deletePost);
  postElement.appendChild(footer);
  containerPosts[0].appendChild(postElement);
};
// end create card
// hide and show element according if  user auth
checkUser((isAuth) => {
  if (isAuth) {
    helperBar[0].classList.remove('hidden');
    logSign[0].classList.add('hidden');
    userProfile.setAttribute('href', `/user/${isAuth.user.name}`);
    userName.textContent = isAuth.user.name;
  }
});
if (inputPost) {
  inputPost.onfocus = () => {
    window.location.href = '/submit';
  };
}
