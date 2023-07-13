import getCategoryList from './service/getCategoryList';
import getCategoryFromBtns from './categories/get_category_from_btn';
import selectedCategoryMarkup from './categories/selectedcategorymarkup';
import { onBookCardClick } from './popup/popUpMarkup';
const bookLoader = document.querySelector('.books-loader-image');
const categoriesList = document.querySelector('.categories-list');
const categoriesSection = document.querySelector('.category-section');
const bestSellersSection = document.querySelector('.container-best-sellers');
const fillCategories = async () => {
  const categories = await getCategoryList();
  const buttonHTML = [
    `<li class="categories-list-item">       
    <button class="categories-button all-categories-btn active-button" type="button" aria-label='best-sellers-button'>       All categories       </button></li>`,
  ];
  const tempHTML = categories.map(category => {
    return `<li class="categories-list-item"><button class="categories-button categories-rest-btns" type="button" aria-label='category-button'>${category.list_name}</button></li>`;
  });
  categoriesList.innerHTML = buttonHTML.join(' ') + tempHTML.join(' ');
  const allCategoriesBtn = document.querySelector('.all-categories-btn');

  const categoriesBtn = document.querySelectorAll('.categories-rest-btns');

  allCategoriesBtn.addEventListener('click', () => {
    if (bestSellersSection.classList.value.includes('hidden')) {
      categoriesBtn.forEach(element => {
        element.classList.remove('active-button');
      });
      categoriesSection.classList.add('hidden');
      bestSellersSection.classList.remove('hidden');
      allCategoriesBtn.classList.add('active-button');
    }
  });

  categoriesBtn.forEach(el => {
    el.addEventListener('click', async event => {
      categoriesBtn.forEach(element => {
        element.classList.remove('active-button');
      });

      event.target.classList.add('active-button');

      if (categoriesSection.classList.value.includes('hidden')) {
        allCategoriesBtn.classList.remove('active-button');
        bestSellersSection.classList.add('hidden');
        categoriesSection.classList.remove('hidden');
        event.target.classList.add('active-button');
      }

      const category = await getCategoryFromBtns(event);

      categoriesSection.classList.add('hidden');
      bookLoader.classList.remove('hidden');

      await selectedCategoryMarkup(category);

      bookLoader.classList.add('hidden');
      categoriesSection.classList.remove('hidden');
    });
  });
};
export default fillCategories;
