import getBooksByCategory from './service/getBooksByCategory';
import bookCard from '../temlpates/bookCard.hbs';
import { bookslist1 } from './querrySelectors';
import clearTitles from './clearcategorytitles';

const request = 'Young Adult Paperback Monthly';

const testBtn = document.querySelector('.test-btn');
const categoryTitle = document.querySelector('.best-sellers-header');

const selectedCategoryMarkup = async () => {
  clearTitles();
  const data = await getBooksByCategory(request);
  bookslist1.innerHTML = bookCard(data);
  categoryTitle.textContent = request;
};

testBtn.addEventListener('click', selectedCategoryMarkup);
