import { signUp, signIn, signOut } from './auth.js';
import { addComment, deleteComment, loadComments } from './comments.js';
import { formAutorizHiden, sendBtnOut } from './auth.js';

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

const database = firebase.database();

document.getElementById('signup-btn').addEventListener('click', signUp);
document.getElementById('sign-in-Btn').addEventListener('click', signIn);
document.getElementById('signout-btn').addEventListener('click', signOut);
document.getElementById('signin-btn').addEventListener('click', changeSign);
document
  .getElementById('signup-change-btn')
  .addEventListener('click', changeSignUp);
function changeSignUp() {
  document.getElementById('signup-btn').classList.remove('is-display');
  document.querySelector('.js-sendIn').classList.add('is-display');
  document.getElementById('signin-btn').classList.remove('is-display');
}

function changeSign() {
  document.getElementById('signup-btn').classList.add('is-display');
  document.querySelector('.js-sendIn').classList.remove('is-display');
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    const userName = firebase.auth().currentUser.displayName; // Отримання імені користувача
    //   localStorage.clear();
    //   saveDataToLocalstorage()
    // addDataToFirebase()
    // getDataFromFirebase()
    // Відображення імені користувача
    const userNameContainer = document.querySelector('.user-name-id');
    // userNameContainer.textContent = `Вітаємо,  ${userName} !`;
    // showCommentsSection();
    formAutorizHiden.style.display = 'none';
    sendBtnOut.classList.remove('is-display');
    const jsBtnTxt = document.querySelectorAll('.btn-txt');
    jsBtnTxt[0].textContent = ` ${userName} `;
    jsBtnTxt[1].textContent = ` ${userName} `;
    // const newElement = document.createElement('p');
    // newElement.setAttribute('class', 'my-element');
    // newElement.textContent = `Вітаємо,  ${userName} !`;
    // document.body.appendChild(newElement);
    const headerNavigation = document.querySelectorAll('.header-nav');
    headerNavigation[0].classList.remove('is-display');
    headerNavigation[1].classList.remove('is-display');

    // const commentsContainer = document.getElementById('comments-container');

    // loadComments();
  } else {
    formAutorizHiden.style.display = 'block';
    sendBtnOut.classList.add('is-display');
    const jsBtnTxt = document.querySelectorAll('.btn-txt');
    jsBtnTxt[0].textContent = 'sign Up';
    jsBtnTxt[1].textContent = 'sign Up';
    // document.querySelector('.my-element').style.display = 'none';
    const headerNavigation = document.querySelectorAll('.header-nav');
    headerNavigation[0].classList.add('is-display');
    headerNavigation[1].classList.add('is-display');

    // hideCommentsSection();
  }
});

export function saveDataToLocalstorage() {
  database
    .ref('bookInfo')
    .once('value')
    .then(snapshot => {
      const data = snapshot.val();
      const dataArray = Object.values(data);

      // Збереження масиву у локальному сховищі
      localStorage.setItem('bookList', JSON.stringify(dataArray));

      console.log('Дані успішно збережено у локальному сховищі');
    })
    .catch(error => {
      console.log(
        'Помилка при отриманні даних з Firebase Realtime Database:',
        error
      );
    });
}

// export function getDataFromFirebase() {
//   // Отримання даних з Firebase Realtime Database
//   database.ref('bookInfo').once('value')
//     .then((snapshot) => {
//       const data = [];
//       snapshot.forEach((childSnapshot) => {
//         const childData = childSnapshot.val();
//         data.push(childData);
//       });

//       const dataEl = JSON.stringify(data);

//       // Збереження даних у локальному сховищі
//       localStorage.setItem('bookList', dataEl);

//       console.log('Дані успішно отримано з Firebase та збережено у локальному сховищі');
//     })
//     .catch((error) => {
//       console.log('Помилка при отриманні даних з Firebase Realtime Database:', error);
//     });
// }

export function addDataToFirebase() {
  const dataEl = localStorage.getItem('bookList');
  const parsedDataEl = JSON.parse(dataEl);

  if (parsedDataEl && parsedDataEl.length > 0) {
    // Збереження даних в Firebase Realtime Database
    database
      .ref('bookInfo')
      .push(parsedDataEl)
      .then(() => {
        console.log('Дані успішно додано до Firebase Realtime Database');
      })
      .catch(error => {
        console.log(
          'Помилка при додаванні даних до Firebase Realtime Database:',
          error
        );
      });
  } else {
    console.log('Немає даних для додавання');
  }
}

// --------------------------------------------------------------------------------------------------

// new Change

// import {sendBtnUp} from '/src/js/modal.js/authorization'
// import {sendBtnIn} from '/src/js/modal.js/authorization'

// import { signUp, signIn, signOut } from './auth';
// import { addComment, deleteComment, loadComments } from './comments.js';
// import { initializeApp } from 'firebase/app';
// // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

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
//  };

// firebase.initializeApp(firebaseConfig);

// // const app = initializeApp(firebaseConfig);
// export let sendBtnOut = document.getElementById('signout-btn');
// sendBtnOut.classList.add('is-display')
// sendBtnUp.addEventListener('click', signUp);
// sendBtnIn.addEventListener('click', signIn);
// sendBtnOut.addEventListener('click', signOut);
// document
// .getElementById('add-comment-btn')
//  .addEventListener('click', addComment);

// export function showCommentsSection() {
//   const authContainer = document.getElementById('auth-container');
//   const commentsContainer = document.getElementById('comments-container');
//   const userName = firebase.auth().currentUser.displayName; // Отримання імені користувача
//    console.log(userName);
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

// -------------------------------------------------------------------------------------------------------------
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
