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
    </div>
    </div>`
  );
  instance.show();
}

console.log(createMarkup);
export { createMarkup };
