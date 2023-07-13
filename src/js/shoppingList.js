import executeWithLoader from './service/executeWithLoader';
import getBookById from './service/getBookById';
import icon from './../img/symbol-defs.svg';

const KEY_LIST = 'bookList';

const listEl = document.querySelector('.books-shoppingList');

let imgEmptyLarge = new URL('../img/emptyLarge@2x.png', import.meta.url);
let imgEmpty = new URL('../img/emptySmall.png', import.meta.url);

async function displayMarkupBasedOnLocalStorage() {
  const dataEl = localStorage.getItem(KEY_LIST);
  const parsedDataEl = JSON.parse(dataEl);

  if (parsedDataEl && parsedDataEl.length > 0) {
    // Display markup when there are items in local storage
    await getBookInfo();
  } else {
    // Display alternative markup when local storage is empty
    const emptyMarkup = markupEmptyPage;
    listEl.innerHTML = emptyMarkup;
  }
}

function markupBooks(data) {
  const dataArray = Array.isArray(data) ? data : [data];
  let markupItem = '';
  for (const book of dataArray) {
    markupItem += `<li class="shoppingList-item ">
        <img class="shoppingList-img" src=${book.book_image} alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">${book.title}</h2>
              <p class="shoppingList-category">${book.list_name}</p>
            </div>
            <button class="shoppingList-trash-btn" id=${book._id} aria-label='delete-book'>
            <svg class='shoppingList-icon-trash'><use href='${icon}#icon-trash'></use></svg>
            </button>
          </div>
          <p class="shoppingList-content">
          ${book.description}
          </p>
          <div class="shoppingList-link-container">
            <p class="text-shoppingList-author">${book.author}</p>
            <ul class='icon-book-modal-list shopping-list'>
            <li>
                <a href=${book.buy_links[0].url} target="_blank">
                <img src="https://i.ibb.co/vvPnCJ6/1-amazon.png" alt="amazon" class="image-link1">
                </a>
            </li>
            <li>
                <a href=${book.buy_links[1].url} target="_blank">
                <img src="https://i.ibb.co/nj6G7gJ/2-ibook.png" alt="ibook" class="image-link2">
                </a>
            </li>
            <li>
                <a href=${book.buy_links[4].url} target="_blank">
                <img src="https://i.ibb.co/fFPnVJN/3-bookshop.png" alt="bookshop" class="image-link2">
                </a>
            </li>
              </div>
            </div>
          </li>`;
  }
  listEl.innerHTML = markupItem;
}

const markupEmptyPage = `<li class="shoppingList-empty-item"><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="/src/main.html">
<picture>
  <source srcset="${imgEmptyLarge} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${imgEmpty}"
    alt="Book"
  />
</picture>
</a></li>`;

const getBookInfo = async () => {
  const dataEl = localStorage.getItem(KEY_LIST);
  const parsedDataEl = JSON.parse(dataEl);
  const bookDataArray = [];
  for (let i = 0; i < parsedDataEl.length; i++) {
    const data = await getBookById(parsedDataEl[i]);
    bookDataArray.push(data);
  }
  markupBooks(bookDataArray);

  const deleteBookButtons = document.querySelectorAll(
    '.shoppingList-trash-btn'
  );

  deleteBookButtons.forEach(el => {
    el.addEventListener('click', e => {
      const bookList = JSON.parse(localStorage.getItem(KEY_LIST));
      const idForDelete = e.target.id;
      const filteredList = bookList.filter(id => idForDelete !== id);
      localStorage.setItem('bookList', JSON.stringify(filteredList));
      displayMarkupBasedOnLocalStorage();
    });
  });
};

executeWithLoader(async () => {
  await displayMarkupBasedOnLocalStorage();
});
