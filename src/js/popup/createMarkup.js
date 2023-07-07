import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function createMarkup(product) {
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

export { createMarkup };
