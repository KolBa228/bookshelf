import getBooksByCategory from './service/getBooksByCategory';
import bookCard from '../temlpates/bookCard.hbs';
import clearTitles from './clearcategorytitles';
import clearBestSellersMarkup from './clearbsmarkup';

const request = 'Combined Print and E-Book Nonfiction';

const categoryWrapper = document.querySelector('.selected-category-books-list');
const testBtn = document.querySelector('.test-btn');
const categoryTitle = document.querySelector('.category-title');

const selectedCategoryMarkup = async () => {
  const data = await getBooksByCategory(request);
  categoryWrapper.innerHTML = bookCard(data);
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
