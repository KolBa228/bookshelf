import { showCommentsSection, hideCommentsSection } from './app';
import { loadComments } from './comments';
import { addDataToFirebase } from './app';

export let sendBtnOut = document.getElementById('signout-btn');
const signOutShow = document.querySelector('js-sign-out');
export const formAutorizHiden = document.getElementById('auth-container');
export function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // Отримання зареєстрованого користувача
      const user = userCredential.user;

      // Оновлення профілю користувача з ім'ям
      user
        .updateProfile({
          displayName: name,
        })
        .then(function () {
          firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
              const userName = firebase.auth().currentUser.displayName; // Отримання імені користувача

              // Відображення імені користувача
              const userNameContainer = document.querySelector('.user-name-id');
              userNameContainer.textContent = `Вітаємо,  ${userName} !`;
              formAutorizHiden.style.display = 'none';
              console.log(`Зарегвструвався ${name}`);

              //  formAutorizHiden.innerHTML = `<h1 class="js-user-name">Hello ${name}</h1>`
              //  signOutShow.classList.add('is-show')
              sendBtnOut.classList.remove('is-display');
              const jsBtnTxt = document.querySelector('.btn-txt');
              jsBtnTxt.textContent = 'sign Out';
              const modalBackdropIdHiden =
                document.querySelector('.modal-backdrop');
              modalBackdropIdHiden.classList.add('is-hidden');
              location.reload();
              displayMarkupBasedOnLocalStorage();
              // showCommentsSection();
              // loadComments();
            }
          });

          // showCommentsSection();
        })
        .catch(function (error) {
          alert('Невірний логін або пароль');
        });
    })
    .catch(function (error) {
      console.log(error);
      alert('Невірний логін або пароль');
    });
}

// document.getElementById('signin-btn').addEventListener('click', signIn);

export function signIn(event) {
  event.preventDefault(); // Забороняє перезавантаження сторінки

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const userName = firebase.auth().currentUser.displayName; // Отримання імені користувача
          // addDataToFirebase()
          // Відображення імені користувача
          const userNameContainer = document.querySelector('.user-name-id');
          userNameContainer.textContent = `Вітаємо,  ${userName} !`;
          formAutorizHiden.style.display = 'none';
          console.log(`Залогінився ${user}`);
          sendBtnOut.classList.remove('is-display');
          const jsBtnTxt = document.querySelector('.btn-txt');
          jsBtnTxt.textContent = 'sign Out';
          const modalBackdropIdHiden =
            document.querySelector('.modal-backdrop');
          modalBackdropIdHiden.classList.add('is-hidden');

          // displayMarkupBasedOnLocalStorage()
          location.reload();
        }
      });

      // showCommentsSection();
      // loadComments();
    })
    .catch(function (error) {
      console.log(error);
      alert('Невірний логін або пароль');
    });
}

export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      const modalBackdropIdHiden = document.querySelector('.modal-backdrop');
      modalBackdropIdHiden.classList.add('is-hidden');
      const userNameContainer = document.querySelector('.user-name-id');
      userNameContainer.style.display = 'none';
      const jsBtnTxt = document.querySelector('.btn-txt');
      jsBtnTxt.textContent = 'sign Up';
      // hideCommentsSection();
      localStorage.clear();
       if (
      window.location.pathname === '/cringe-team-top-project/shoping_list.html'
       ) {
         window.location.pathname =
           '/cringe-team-top-project/main.html';
    }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function UserAutoripftion() {
  const userName = firebase.auth().currentUser.displayName; // Отримання імені користувача

  // Відображення імені користувача
  const userNameContainer = document.querySelector('.user-name-id');
  userNameContainer.textContent = `Вітаємо,  ${userName} !`;
  formAutorizHiden.style.display = 'none';
  console.log(`Зарегвструвався ${name}`);

  //  formAutorizHiden.innerHTML = `<h1 class="js-user-name">Hello ${name}</h1>`
  //  signOutShow.classList.add('is-show')
  sendBtnOut.classList.remove('is-display');
  const jsBtnTxt = document.querySelector('.btn-txt');
  jsBtnTxt.textContent = 'sign Out';
  const modalBackdropIdHiden = document.querySelector('.modal-backdrop');
  modalBackdropIdHiden.classList.add('is-hidden');
  // showCommentsSection();
  // loadComments();
}

// ---------------------------------------------------------------------------------------------------------
// new Change

// import {showCommentsSection, hideCommentsSection} from './app'
// import { loadComments } from "./comments";
// import { sendBtnOut } from './app';

// window.addEventListener('load', function() {
//   const sendBtnOutDisplay = localStorage.getItem('sendBtnOutDisplay');
//   if (sendBtnOutDisplay === 'visible') {
//     sendBtnOut.classList.remove('is-display');
//   } else {
//     sendBtnOut.classList.add('is-display');
//   }
// });

// export function signUp() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const name = document.getElementById("name").value;
//   //  debugger
//       firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(function(userCredential) {
//         // Отримання зареєстрованого користувача

//         const user = userCredential.user;

//           sendBtnOut.classList.remove('is-display')
//           localStorage.setItem('sendBtnOutDisplay', 'visible');

//         // Оновлення профілю користувача з ім'ям
//         user.updateProfile({
//           displayName: name
//         })
//         .then(function() {
//           // sendBtnOut.classList.remove('is-display')
//           showCommentsSection();
//           console.log(firebase.auth().currentUser.displayName);

//         })
//         .catch(function(error) {
//           console.log(error);
//           sendBtnOut.classList.add('is-display')
//         });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

// export function signIn() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   // sendBtnOut.classList.remove('is-display')
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(function() {
//       console.log(user);
//       firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           sendBtnOut.classList.remove('is-display')
//           localStorage.setItem('sendBtnOutDisplay', 'visible');
//           // Виконайте потрібні дії для авторизованого користувача
//           return
//         }
//       });

//       //  showCommentsSection();
//       // loadComments();
//       console.log('ghbdat');
//       sendBtnOut.classList.remove('is-display')
//       localStorage.setItem('sendBtnOutDisplay', 'visible');
//     })
//     .catch(function(error) {
//       console.log(error);
//       sendBtnOut.classList.add('is-display')
//     });

// }

// export function signOut() {
//   firebase.auth().signOut()
//     .then(function() {
//       hideCommentsSection();
//       sendBtnOut.classList.add('is-display')
//       localStorage.setItem('sendBtnOutDisplay', 'hidden');
//           })
//     .catch(function(error) {
//       console.log(error);
//     });
// }
