import getBooksByCategory from './service/getBooksByCategory';
import bookCard from '../temlpates/bookCard.hbs';
import { bookslist1 } from './querrySelectors';
import clearTitles from './clearcategorytitles';
import clearBestSellersMarkup from './clearbsmarkup';

const request = 'Combined Print and E-Book Nonfiction';

const testBtn = document.querySelector('.test-btn');
const categoryTitle = document.querySelector('.best-sellers-header');

const selectedCategoryMarkup = async () => {
  clearTitles();
  clearBestSellersMarkup();
  const data = await getBooksByCategory(request);
  bookslist1.innerHTML = bookCard(data);
  categoryTitle.textContent = request;
  const splitTitleFirst = categoryTitle.textContent
    .split(' ')
    .slice(0, -1)
    .join(' ');
  const splitTitleSecond = categoryTitle.textContent.split(' ').pop();

  categoryTitle.innerHTML = `
  <h1 class="best-sellers-header">${splitTitleFirst} <span class="header-span">${splitTitleSecond}</span></h1>
  `;
};

testBtn.addEventListener('click', selectedCategoryMarkup);
