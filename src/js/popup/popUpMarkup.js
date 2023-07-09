import bookCard from '../../temlpates/bookCard.hbs';
import getBookById from '../service/getBookById';
import getBooksByCategory from '../service/getBooksByCategory';

const ulAll = document.querySelectorAll('.best-sellers-books-list');

ulAll.forEach(ul => {
  ul.addEventListener('click', openPopUp);
});

const bookCard = bookCard(getBooksByCategory);

export async function openPopUp(ev) {
  ev.preventDefault();

  if (ev.target.nodeName === 'LI') {
    return;
  }

  const bookInfo = await getBookById(ev.target.id);
  console.log(bookInfo);

  //   getBookById(ev.target.id).then(res => {
  //     console.log(res);
  //   });
}

// const popUpMarkup = `<img src="${product.book_image}" alt="${product.title}" class="book-modal-img"/>`;

// const popMarkup = `<div class="book-modal">
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
//     </div>`;
