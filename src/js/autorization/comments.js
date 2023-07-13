


// export function addComment() {
//   const user = firebase.auth().currentUser;
//   const comment = document.getElementById("comment-input").value;

//   if (user) {
//     const commentsRef = firebase.database().ref("comments");
//     commentsRef.push().set({
//       userId: user.uid,
//       comment: comment
//     })
//     .then(function() {
//       document.getElementById("comment-input").value = "";
//       loadComments();
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//   }
// }

// Завантажити коментарі
// export function loadComments() {
//   const user = firebase.auth().currentUser;

//   if (user) {
//     const commentsRef = firebase.database().ref("comments");
//     commentsRef.on("value", function(snapshot) {
//       const commentsContainer = document.getElementById("comments");
//       commentsContainer.innerHTML = "";

//       snapshot.forEach(function(childSnapshot) {
//         const comment = childSnapshot.val();
//         const commentId = childSnapshot.key;

//         if (comment.userId === user.uid) {
//           const commentItem = document.createElement("div");
//           commentItem.innerHTML = `
//             <span>${comment.comment}</span>
//             <button id="${commentId}">Видалити</button>
//           `;

//           commentsContainer.appendChild(commentItem);
//           document.getElementById(commentId).addEventListener('click', function() {
//             deleteComment(commentId);
//           });
//         }
//       });
//     });
//   }
// }





// export function deleteComment(commentId) {
//   const user = firebase.auth().currentUser;

//   if (user) {
//     const commentRef = firebase.database().ref("comments").child(commentId);
//     commentRef.once("value", function(snapshot) {
//       const comment = snapshot.val();

//       // Перевірка, чи коментар належить поточному користувачу
//       if (comment.userId === user.uid) {
//         commentRef.remove()
//           .then(function() {
//             loadComments();
//           })
//           .catch(function(error) {
//             console.log(error);
//           });
//       }
//     });
//   }
// }


















// ------------------------------------------------------------------------------------------------
// new Change




// export function addComment() {
//   const user = firebase.auth().currentUser;
//   const comment = document.getElementById("comment-input").value;

//   if (user) {
//     const commentsRef = firebase.database().ref("comments");
//     commentsRef.push().set({
//       userId: user.uid,
//       comment: comment
//     })
//     .then(function() {
//       document.getElementById("comment-input").value = "";
//       loadComments();
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//   }
// }

// // Завантажити коментарі
// export function loadComments() {
//   const user = firebase.auth().currentUser;

//   if (user) {
//     const commentsRef = firebase.database().ref("comments");
//     commentsRef.on("value", function(snapshot) {
//       const commentsContainer = document.getElementById("comments");
//       commentsContainer.innerHTML = "";

//       snapshot.forEach(function(childSnapshot) {
//         const comment = childSnapshot.val();
//         const commentId = childSnapshot.key;

//         if (comment.userId === user.uid) {
//           const commentItem = document.createElement("div");
//           commentItem.innerHTML = `
//             <span>${comment.comment}</span>
//             <button id="${commentId}">Видалити</button>
//           `;

//           commentsContainer.appendChild(commentItem);
//           document.getElementById(commentId).addEventListener('click', function() {
//             deleteComment(commentId);
//           });
//         }
//       });
//     });
//   }
// }





// export function deleteComment(commentId) {
//   const user = firebase.auth().currentUser;

//   if (user) {
//     const commentRef = firebase.database().ref("comments").child(commentId);
//     commentRef.once("value", function(snapshot) {
//       const comment = snapshot.val();

//       // Перевірка, чи коментар належить поточному користувачу
//       if (comment.userId === user.uid) {
//         commentRef.remove()
//           .then(function() {
//             loadComments();
//           })
//           .catch(function(error) {
//             console.log(error);
//           });
//       }
//     });
//   }
// }