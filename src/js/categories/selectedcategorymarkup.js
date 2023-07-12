import getBooksByCategory from '../service/getBooksByCategory';
import categoryBook from '../../temlpates/categoryBook.hbs';
import checkData from './check_data';
import { onBookCardClick } from '../popup/popUpMarkup';

const categoryWrapper = document.querySelector('.selected-category-books-list');
const categoryTitle = document.querySelector('.category-title');
const categoryList = document.querySelector('.selected-category-books-list');
categoryList.addEventListener('click', evt => {
  onBookCardClick(evt);
});

const selectedCategoryMarkup = async request => {
  const data = await getBooksByCategory(request);
  data.forEach(book => {
    checkData(book);
  });
  categoryWrapper.innerHTML = categoryBook(data);
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

export default selectedCategoryMarkup;
