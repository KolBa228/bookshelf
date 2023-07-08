import getBooksByCategory from './service/getBooksByCategory';
import bookCard from '../temlpates/bookCard.hbs';
import { bookslist1 } from './querrySelectors';
import { clearMarkup } from './fillBestSellers';

const categorySubTitle1 = document.querySelector('.category1');
const categorySubTitle2 = document.querySelector('.category2');
const categorySubTitle3 = document.querySelector('.category3');
const categorySubTitle4 = document.querySelector('.category4');

const testBtn = document.querySelector('.test-btn');
const categoryTitle = document.querySelector('.best-sellers-header');

const request = 'Young Adult Paperback Monthly';

testBtn.addEventListener('click', categoryMarkup);

// const categoryMarkup = async () => {
//   const categoryPromise = getBooksByCategory(request);
//   categoryPromise.then(data => {
//     bookslist1.innerHTML = bookCard(data);
//   });
// };

function clearTitle() {
  categorySubTitle1.textContent = '';
  categorySubTitle2.textContent = '';
  categorySubTitle3.textContent = '';
  categorySubTitle4.textContent = '';
}

async function categoryMarkup() {
  clearMarkup();
  clearTitle();
  categoryTitle.textContent = request;
  const promise = getBooksByCategory(request);
  promise.then(data => {
    bookslist1.innerHTML = bookCard(data);
  });
}
