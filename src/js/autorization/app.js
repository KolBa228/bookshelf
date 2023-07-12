// import { signUp, signIn, signOut } from './auth.js';
// import { addComment, deleteComment, loadComments } from './comments.js';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBQHHf9PHllCE_RcrTF99QZWE74QZNvhho',
//   authDomain: 'wowa-kalinin-progect.firebaseapp.com',
//   projectId: 'wowa-kalinin-progect',
//   storageBucket: 'wowa-kalinin-progect.appspot.com',
//   messagingSenderId: '418237658667',
//   appId: '1:418237658667:web:c2e7ac3839d217356b1c6e',
//   databaseURL:
//     'https://wowa-kalinin-progect-default-rtdb.europe-west1.firebasedatabase.app/',
//   measurementId: 'G-PF0Y9DKB6P',
// };

// firebase.initializeApp(firebaseConfig);

// document.getElementById('signup-btn').addEventListener('click', signUp);
// document.getElementById('signin-btn').addEventListener('click', signIn);
// document.getElementById('signout-btn').addEventListener('click', signOut);
// document
//   .getElementById('add-comment-btn')
//   .addEventListener('click', addComment);
  

// export function showCommentsSection() {
//   const authContainer = document.getElementById('auth-container');
//   const commentsContainer = document.getElementById('comments-container');
//   const userName = firebase.auth().currentUser.displayName; // Отримання імені користувача

//   // Відображення імені користувача
//   const userNameContainer = document.getElementById('user-name');
//   userNameContainer.textContent = 'Вітаємо, ' + userName + '!';

//   authContainer.style.display = 'none';
//   commentsContainer.style.display = 'block';
// }

// export function hideCommentsSection() {
//   const authContainer = document.getElementById('auth-container');
//   const commentsContainer = document.getElementById('comments-container');

//   authContainer.style.display = 'block';
//   commentsContainer.style.display = 'none';
// }

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     showCommentsSection();
//     loadComments();
//   } else {
//     hideCommentsSection();
//   }
// });

// new Change

import {sendBtnUp} from '/src/js/modal.js/authorization'
import {sendBtnIn} from '/src/js/modal.js/authorization'


import { signUp, signIn, signOut } from './auth';
import { addComment, deleteComment, loadComments } from './comments.js';
import { initializeApp } from 'firebase/app';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFBwN4f9PmRfsv-nwy-H-N5NRWZgQ_2wA",
  authDomain: "auth-boock-project.firebaseapp.com",
  databaseURL: "https://auth-boock-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "auth-boock-project",
  storageBucket: "auth-boock-project.appspot.com",
  messagingSenderId: "547291511782",
  appId: "1:547291511782:web:dd5afcb2d3d0d0b2013427",
  databaseURL:
    'https://auth-boock-project-default-rtdb.europe-west1.firebasedatabase.app/',
 };



firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
export let sendBtnOut = document.getElementById('signout-btn');
sendBtnOut.classList.add('is-display')
sendBtnUp.addEventListener('click', signUp);
sendBtnIn.addEventListener('click', signIn);
sendBtnOut.addEventListener('click', signOut);
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



// <div id="authForm">
// <h2>Sign Up or Sign In</h2>
// <input type="email" placeholder="email" id="userEmail">
// <input type="password" placeholder="password" id="userPassword">  <br><br>
// <button id="signUpButton">Sign Up</button>
// <button id="signInButton">Sign In</button>
// </div>

// <div id="secretContent">
// <h3>This is top secret information that you can only see if</h3>
// <h1>AUTHENTICATED</h1>
// <button id="signOutButton">Sign Out</button>
// </div>
