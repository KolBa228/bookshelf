import {
  bookslist1,
  bookslist2,
  bookslist3,
  bookslist4,
} from './querrySelectors';

function clearBestSellersMarkup() {
  bookslist1.innerHTML = '';
  bookslist2.innerHTML = '';
  bookslist3.innerHTML = '';
  bookslist4.innerHTML = '';
}

export default clearBestSellersMarkup;
