// import {showCommentsSection, hideCommentsSection} from './app'
// import { loadComments } from "./comments";

// export function signUp() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const name = document.getElementById("name").value;

//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(function(userCredential) {
//         // Отримання зареєстрованого користувача
//         const user = userCredential.user;

//         // Оновлення профілю користувача з ім'ям
//         user.updateProfile({
//           displayName: name
//         })
//         .then(function() {
//           showCommentsSection();
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

// export function signIn() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(function() {
//       showCommentsSection();
//       loadComments();
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }

// export function signOut() {
//   firebase.auth().signOut()
//     .then(function() {
//       hideCommentsSection();
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }

// new Change

let opnBtnModel = document.getElementById('btnOpenModal');
import { showCommentsSection, hideCommentsSection } from './app';
import { loadComments } from './comments';
import { sendBtnOut } from './app';
export function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let name = document.getElementById('name').value;
  // const opnBtnModel = document.getElementById('btnOpenModal');
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // Отримання зареєстрованого користувача
      // console.log(opnBtnModel.textContent);
      const user = userCredential.user;
      sendBtnOut.classList.remove('is-display');
      document.getElementById('header-auth').classList.remove('is-hidden');
      opnBtnModel.textContent = `${name}`;
      // Оновлення профілю користувача з ім'ям
      user
        .updateProfile({
          displayName: name,
        })
        .then(function () {
          showCommentsSection();
        })
        .catch(function (error) {
          console.log(error);
          sendBtnOut.classList.add('is-display');
        });
    })
    .catch(function (error) {
      console.log(error);
      opnBtnModel.textContent = 'sing up';
    });
}

export function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let name = document.getElementById('name').value;
  // sendBtnOut.classList.remove('is-display')
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      showCommentsSection();
      loadComments();
      sendBtnOut.classList.remove('is-display');
      document.getElementById('header-auth').classList.remove('is-hidden');
      opnBtnModel.textContent = `${name}`;
    })
    .catch(function (error) {
      console.log(error);
      sendBtnOut.classList.add('is-display');
      opnBtnModel.textContent = 'sing up';
    });
}

export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      hideCommentsSection();
      sendBtnOut.classList.add('is-display');
      document.getElementById('header-auth').classList.add('is-hidden');
      opnBtnModel.textContent = 'sing up';
    })
    .catch(function (error) {
      console.log(error);
    });
}
