import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import bookCard from '../../temlpates/bookCard.hbs';

const bookCard = bookCard();

// const booksList = document.querySelectorAll('.best-sellers-books-list');
// console.log(booksList);

// booksList.forEach(el => {
// is not array--- ul.map(listElement => {

//   return listElement;
// });
// console.log(listElement);
// });

// booksList.forEach(el => {
//   console.log(el);
// });
// -----------------------------
const bookItem = document.querySelector('.best-sellers-books-list');
const listItems = bookItem.children;
// // приходить псевдомасив
// console.log(listItems);
// console.log(Array.from(listItems));
// -------------------------------------------

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

    <button type="button">Add to shopping list</button>
    </div>`
  );
  instance.show();
}

// const listItems = bookItem.children;
// приходить псевдомасив

async function processListItems() {
  for (const listItem of listItems) {
    await processListItem(listItem);
  }
}

async function processListItem(listItem) {
  console.log(listItem);
}

processListItems();

console.log(listItems);
console.log(Array.from(listItems));

export { createMarkup };
