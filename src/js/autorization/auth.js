
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

export function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Отримання зареєстрованого користувача
        const user = userCredential.user;
  
        // Оновлення профілю користувача з ім'ям
        user.updateProfile({
          displayName: name
        })
        .then(function() {
          showCommentsSection();
        })
        .catch(function(error) {
          console.log(error);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  


export function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      showCommentsSection();
      loadComments();
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function signOut() {
  firebase.auth().signOut()
    .then(function() {
      hideCommentsSection();
    })
    .catch(function(error) {
      console.log(error);
    });
}