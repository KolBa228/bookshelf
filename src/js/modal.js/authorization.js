// // const onBtnModalAuthorization = document.querySelector('.openModal');
// // onBtnModalAuthorization.addEventListener('click',modalAuthorization)
// // function modalAuthorization(){

// // }

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('.header-open-modal-btn'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// const sendBtnUp = document.querySelector('.js-sendUp');
// const sendBtnIn = document.querySelector('.js-sendIn');
// const onBtnChangeUP = document.querySelector('.js-up');
// const onBtnChangeIN = document.querySelector('.js-in');
// onBtnChangeUP.addEventListener('click', changeModalUp);
// function changeModalUp() {
//   onBtnChangeUP.classList.add('hover-color');
//   onBtnChangeIN.classList.remove('hover-color');
//   sendBtnUp.classList.remove('is-display');
//   sendBtnIn.classList.add('is-display');
// }

// onBtnChangeIN.addEventListener('click', changeModalIn);
// function changeModalIn() {
//   onBtnChangeUP.classList.remove('hover-color');
//   onBtnChangeIN.classList.add('hover-color');
//   sendBtnUp.classList.add('is-display');
//   sendBtnIn.classList.remove('is-display');
// }

// new Change

// const onBtnModalAuthorization = document.querySelector('.openModal');
// onBtnModalAuthorization.addEventListener('click',modalAuthorization)
// function modalAuthorization(){

// }

(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.header-open-modal-btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn[0].addEventListener('click', toggleModal);
  refs.openModalBtn[1].addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

export const sendBtnUp = document.getElementById('signup-btn');
export const sendBtnIn = document.getElementById('signin-btn');
const onBtnChangeUP = document.querySelector('.js-up');
const onBtnChangeIN = document.querySelector('.js-in');
onBtnChangeUP.addEventListener('click', changeModalUp);
function changeModalUp() {
  onBtnChangeUP.classList.add('hover-color');
  onBtnChangeIN.classList.remove('hover-color');
  sendBtnUp.classList.remove('is-display');
  sendBtnIn.classList.add('is-display');
}

onBtnChangeIN.addEventListener('click', changeModalIn);
function changeModalIn() {
  onBtnChangeUP.classList.remove('hover-color');
  onBtnChangeIN.classList.add('hover-color');
  sendBtnUp.classList.add('is-display');
  sendBtnIn.classList.remove('is-display');
}

// import { initializeApp } from 'firebase/app';
//         import {
//             getAuth,
//             createUserWithEmailAndPassword,
//             signInWithEmailAndPassword,
//             onAuthStateChanged,
//             signOut
//         //Update the below URL with the appropriate version if necessary.
//         } from 'firebase/auth';

//         // INSERT YOUR FIREBASE CONFIG OBJECT HERE
//         const firebaseConfig = {
//           apiKey: "AIzaSyCFBwN4f9PmRfsv-nwy-H-N5NRWZgQ_2wA",
//           authDomain: "auth-boock-project.firebaseapp.com",
//           databaseURL: "https://auth-boock-project-default-rtdb.europe-west1.firebasedatabase.app",
//           projectId: "auth-boock-project",
//           storageBucket: "auth-boock-project.appspot.com",
//           messagingSenderId: "547291511782",
//           appId: "1:547291511782:web:dd5afcb2d3d0d0b2013427",
//           databaseURL:
//             'https://auth-boock-project-default-rtdb.europe-west1.firebasedatabase.app/',
//          };

//         const app = initializeApp(firebaseConfig);
//         const auth = getAuth(app);

//         const userEmail = document.querySelector("#email");
//         const userPassword = document.querySelector("#password");
//         const authForm = document.querySelector("#authForm");
//         const secretContent = document.querySelector("#secretContent");
//         const signUpButton = document.querySelector("#signup-btn");
//         const signInButton = document.querySelector("#signin-btn");
//

//         // secretContent.style.display = 'none';

//         const userSignUp = async() => {
//             const signUpEmail = userEmail.value;
//             const signUpPassword = userPassword.value;
//             createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log(user);
//                 alert("Your account has been created!");
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode + errorMessage)
//             })
//         }

//         const userSignIn = async() => {
//             const signInEmail = userEmail.value;
//             const signInPassword = userPassword.value;
//             signInWithEmailAndPassword(auth, signInEmail, signInPassword)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 alert("You have signed in successfully!");
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode + errorMessage)
//             })
//         }

//         const checkAuthState = async() => {
//             onAuthStateChanged(auth, user => {
//                 if(user) {
//                     authForm.style.display = 'none';
//                     secretContent.style.display = 'block';
//                 }
//                 else {
//                     authForm.style.display = 'block';

//                 }
//             })
//         }

//         // const userSignOut = async() => {
//         //     await signOut(auth);
//         // }

//         checkAuthState();

//         signUpButton.addEventListener('click', userSignUp);
//         signInButton.addEventListener('click', userSignIn);
//         // signOutButton.addEventListener('click', userSignOut);

// // Your web app's Firebase configuration
//   var firebaseConfig = {
//     //firebase config stuff
//       };
//       // Initialize Firebase
//       firebase.initializeApp(firebaseConfig);

//       const auth = firebase.auth();

//       function signUp(){

//         var email = document.getElementById("email");
//         var password = document.getElementById("password");

//         const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//         promise.catch(e => alert(e.message));

//         alert("Signed Up");
//       }

//       function signIn(){

//         var email = document.getElementById("email");
//         var password = document.getElementById("password");

//         const promise = auth.signInWithEmailAndPassword(email.value, password.value);
//         promise.catch(e => alert(e.message));

//       }

//       function signOut(){

//         auth.signOut();
//         alert("Signed Out");

//       }

//       auth.onAuthStateChanged(function(user){

//         if(user){

//           var email = user.email;
//           alert("Active User " + email);

//           //Take user to a different or home page

//           //is signed in

//         }else{

//           alert("No Active User");
//           //no user is signed in
//         }

//       });
