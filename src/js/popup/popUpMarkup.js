import bookCard from '../../temlpates/bookCard.hbs';
import { backDrop, popUp, ulAll } from '../querrySelectors';
import getBookById from '../service/getBookById';
import getBooksByCategory from '../service/getBooksByCategory';

ulAll.forEach(ul => {
  ul.addEventListener('click', onBookCardClick);
});

export async function onBookCardClick(ev) {
  ev.preventDefault();

  if (ev.target.nodeName === 'LI') {
    return;
  }

  const bookInfo = await getBookById(ev.target.id);
  //   console.log(ev.target.id);

  console.log(bookInfo);

  const popUpItemMarkup = `<div class='book-modal-container'>
  <img src="${bookInfo.book_image}" alt="${bookInfo.title}" class="book-modal-img"/>
  
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${bookInfo.title}</h2>
        <h3 class="book-modal-author">${bookInfo.author}</h3>
        <p class='book-modal-desc'>${bookInfo.description}</p>
        <ul class='icon-book-modal-list'>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/vvPnCJ6/1-amazon.png" alt="amazon">
            </a>
        </li>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/nj6G7gJ/2-ibook.png" alt="ibook">
            </a>
        </li>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/fFPnVJN/3-bookshop.png" alt="bookshop">
            </a>
        </li>
        </ul>
    </div>
    </div>

    <button type="button" class='book-modal-btn js-add' id='js-book-modal-btn'>Add to shopping list</button>

    <p class='book-modal-buy'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    <button class='book-modal-close' id='js-book-modal-btn-close'>
    <svg class='icon-book-modal-close'><use href='./img/symbol-defs.svg#icon-close'></use></svg>
    </button>`;

  popUp.innerHTML = popUpItemMarkup;

  console.log(popUpItemMarkup);

  const addToShopListButton = document.querySelector('.book-modal-btn');
  addToShopListButton.addEventListener(
    'click',
    localStorage.setItem('bookList', JSON.stringify(bookInfo))
  );

  backDrop.classList.remove('hidden');
  popUp.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
