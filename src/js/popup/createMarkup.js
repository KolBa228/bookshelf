import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import bookCard from '../../temlpates/bookCard.hbs';
import '../mainPage.js';

const bookCard = bookCard();

// -----------------------------
// const bookItem = document.querySelector('.best-sellers-books-list');
// const listItems = bookItem.children;
// // // приходить псевдомасив
// console.log(listItems);
// // console.log(Array.from(listItems));
// // listItems.addEventListener('click', createMarkup);

// -------------------------------------------

let popUpListItems = [];

// const popUpBookList = async () => {
//   const list = await document.querySelectorAll('.best-sellers-books-list');
//   popUpListItems.push(list.childNodes);
//   console.log(popUpListItems);
// };

// --------------------------
// FIRST VAR

// function createMarkup(product) {
//   console.log(product);

//   const isImage = product.target.classList.contains('book-modal-img');
//   if (!isImage) return;

//   product.preventDefault();

//   const instance = basicLightbox.create(
//     `<div class="book-modal">
//     <img src="${product.book_image}" alt="${product.title}" class="book-modal-img"/>
//     <div class='book-modal-details'>
//         <h2 class="book-modal-title">${product.title}</h2>
//         <h3 class="book-modal-author">${product.author}</h3>
//         <p class='book-modal-desc'>${product.description}</p>
//         <ul class='icon-book-modal-list'>
//         <li>
//             <a href="" target="_blank">
//             <img src="./img/1-amazon.jpg" alt="amazon">
//             </a>
//         </li>
//         <li>
//             <a href="" target="_blank">
//             <img src="./img/2-ibook.jpg" alt="ibook">
//             </a>
//         </li>
//         <li>
//             <a href="" target="_blank">
//             <img src="./img/3-bookshop.jpg" alt="bookshop">
//             </a>
//         </li>
//         </ul>
//     </div>

//     <button type="button" class='book-modal-btn js-add' id='js-book-modal-btn'>Add to shopping list</button>

//     <p class='book-modal-buy'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
//     <button class='book-modal-close' id='js-book-modal-btn-close'>
//     <svg class='icon-book-modal-close'><use href='./img/symbol-defs.svg#icon-close'></use></svg>
//     </button>
//     </div>`
//   );
//   instance.show();
// }

// ------------

function createMarkup(product) {
  const isImage = product.target.classList.contains('book-modal-img');
  if (!isImage) return;

  product.preventDefault();

  const instance = basicLightbox.create(
    `<div class="book-modal">
    <img src="${product.book_image}" alt="${product.title}" class="book-modal-img"/>
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${product.title}</h2>
        <h3 class="book-modal-author">${product.author}</h3>
        <p class='book-modal-desc'>${product.description}</p>
        <ul class='icon-book-modal-list'>
        <li>
            <a href="" target="_blank">
            <img src="./img/1-amazon.jpg" alt="amazon">
            </a>
        </li>
        <li>
            <a href="" target="_blank">
            <img src="./img/2-ibook.jpg" alt="ibook">
            </a>
        </li>
        <li>
            <a href="" target="_blank">
            <img src="./img/3-bookshop.jpg" alt="bookshop">
            </a>
        </li>
        </ul>
    </div>

    <button type="button" class='book-modal-btn js-add' id='js-book-modal-btn'>Add to shopping list</button>

    <p class='book-modal-buy'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    <button class='book-modal-close' id='js-book-modal-btn-close'>
    <svg class='icon-book-modal-close'><use href='./img/symbol-defs.svg#icon-close'></use></svg>
    </button>
    </div>`
  );
  instance.show();
}

export function popUpBookList() {
  const list = document.querySelectorAll('.best-sellers-books-list');
  popUpListItems.push(list.childNodes);
}

popUpBookList(createMarkup);
// -----------------------------
// const listItems = bookItem.children;
// приходить псевдомасив

// async function processListItems() {
//   for (const listItem of listItems) {
//     await processListItem(listItem);
//   }
// }

// async function processListItem(listItem) {
//   console.log(listItem);
// }

// processListItems();

// console.log(listItems);
// console.log(Array.from(listItems));
// -------------------------------------------------
createMarkup();

export { createMarkup };
