import { signUp, signIn, signOut } from './auth.js';
import { addComment, deleteComment, loadComments } from './comments.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBQHHf9PHllCE_RcrTF99QZWE74QZNvhho',
  authDomain: 'wowa-kalinin-progect.firebaseapp.com',
  projectId: 'wowa-kalinin-progect',
  storageBucket: 'wowa-kalinin-progect.appspot.com',
  messagingSenderId: '418237658667',
  appId: '1:418237658667:web:c2e7ac3839d217356b1c6e',
  databaseURL:
    'https://wowa-kalinin-progect-default-rtdb.europe-west1.firebasedatabase.app/',
  measurementId: 'G-PF0Y9DKB6P',
};

firebase.initializeApp(firebaseConfig);

document.getElementById('signup-btn').addEventListener('click', signUp);
document.getElementById('signin-btn').addEventListener('click', signIn);
document.getElementById('signout-btn').addEventListener('click', signOut);
document
  .getElementById('add-comment-btn')
  .addEventListener('click', addComment);
  

export function showCommentsSection() {
  const authContainer = document.getElementById('auth-container');
  const commentsContainer = document.getElementById('comments-container');
  const userName = firebase.auth().currentUser.displayName; // Отримання імені користувача

  // Відображення імені користувача
  const userNameContainer = document.getElementById('user-name');
  userNameContainer.textContent = 'Вітаємо, ' + userName + '!';

  authContainer.style.display = 'none';
  commentsContainer.style.display = 'block';
}

export function hideCommentsSection() {
  const authContainer = document.getElementById('auth-container');
  const commentsContainer = document.getElementById('comments-container');

  authContainer.style.display = 'block';
  commentsContainer.style.display = 'none';
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    showCommentsSection();
    loadComments();
  } else {
    hideCommentsSection();
  }
});
