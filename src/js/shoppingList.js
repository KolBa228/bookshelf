import executeWithLoader from './service/executeWithLoader';
import getBookById from './service/getBookById';

const KEY_LIST = 'bookList';

const listEl = document.querySelector('.books-shoppingList');
let imgEmptyLarge = new URL('../img/emptyLarge@2x.png', import.meta.url);
let imgEmpty = new URL('../img/emptySmall.png', import.meta.url);

function displayMarkupBasedOnLocalStorage() {
  const dataEl = localStorage.getItem(KEY_LIST);
  const parsedDataEl = JSON.parse(dataEl);

  if (parsedDataEl && parsedDataEl.length > 0) {
    // Display markup when there are items in local storage
    getBookInfo();
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
    markupItem += `<li class="shoppingList-item">
        <img class="shoppingList-img" src=${book.book_image} alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">${book.title}</h2>
              <p class="shoppingList-category">${book.list_name}</p>
            </div>
            <button class="shoppingList-trash-btn" id=${book._id}>
              <svg class="shoppingList-icon-trash">
                <use href="./img/symbol-defs.svg#icon-trash"></use>
              </svg>
            </button>
            </button>
          </div>
          <p class="shoppingList-content">
          ${book.description}
          </p>
          <div class="shoppingList-link-container">
            <p class="text-shoppingList-author">${book.author}</p>
            <ul class="box-shoppingList-shop">
              <li>
                <a class="shop-shoppingList-link" href=${book.buy_links[0]}>
                  <img
                    class="shop-shoppingList-img1"
                    src="./img/amazon.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  class="shop-shoppingList-link"
                  href=${book.buy_links[1]}
                >
                  <img
                    class="shop-shoppingList-img2"
                    src="./img/book.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  class="shop-shoppingList-link"
                  href=${book.buy_links[4]}
                >
                  <img
                    class="shop-shoppingList-img2"
                    src="./img/bookshop.png"
                    alt=""
                  />
                </a>
              </li> 
              </ul>
              </div>
            </div>
          </li>`;
  }
  listEl.innerHTML = markupItem;
}

const markupEmptyPage = `<li><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${imgEmptyLarge} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${imgEmpty}"
    alt="Book"
  />
</picture>
</a></li>`;

const dataEl = localStorage.getItem(KEY_LIST);

const parsedDataEl = JSON.parse(dataEl);

const getBookInfo = async () => {
  console.log(1);
  const bookDataArray = [];
  for (let i = 0; i < parsedDataEl.length; i++) {
    const data = await getBookById(parsedDataEl[i]);
    console.log(data);
    bookDataArray.push(data);
  }
  markupBooks(bookDataArray);
  console.log(2);
};

executeWithLoader(() => {
  console.log('hello');
  getBookInfo();
});

displayMarkupBasedOnLocalStorage();
