
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


import {showCommentsSection, hideCommentsSection} from './app'
import { loadComments } from "./comments";
import { sendBtnOut } from './app';
export function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
   
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Отримання зареєстрованого користувача
        const user = userCredential.user;
        sendBtnOut.classList.remove('is-display')
        // Оновлення профілю користувача з ім'ям
        user.updateProfile({
          displayName: name
        })
        .then(function() {
          showCommentsSection();
          
        })
        .catch(function(error) {
          console.log(error);
          sendBtnOut.classList.add('is-display')
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  


export function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // sendBtnOut.classList.remove('is-display')
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
       showCommentsSection();
      loadComments();
      sendBtnOut.classList.remove('is-display')
    })
    .catch(function(error) {
      console.log(error);
      sendBtnOut.classList.add('is-display')
    });
    
}

export function signOut() {
  firebase.auth().signOut()
    .then(function() {
      hideCommentsSection();
      sendBtnOut.classList.add('is-display')
          })
    .catch(function(error) {
      console.log(error);
    });
}