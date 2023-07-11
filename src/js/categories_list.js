import getCategoryList from './service/getCategoryList';
import getCategoryFromBtns from './categories/get_category_from_btn';
import selectedCategoryMarkup from './categories/selectedcategorymarkup';
import { onBookCardClick } from './popup/popUpMarkup';
const categoriesList = document.querySelector('.categories-list');
const fillCategories = async () => {
  const categories = await getCategoryList();
  const buttonHTML = [
    `<li class="categories-list-item">       
    <button class="categories-button active-button" type="button">       All categories       </button></li>`,
  ];
  const tempHTML = categories.map(category => {
    return `<li class="categories-list-item"><button class="categories-button" type="button">${category.list_name}</button></li>`;
  });
  categoriesList.innerHTML = buttonHTML.join(' ') + tempHTML.join(' ');
  const categoriesBtn = document.querySelectorAll('.categories-button');
  categoriesBtn.forEach(el => {
    el.addEventListener('click', async event => {
      // console.log(event);
      const category = await getCategoryFromBtns(event);
      selectedCategoryMarkup(category);
      const categoryList = document.querySelector(
        '.selected-category-books-list'
      );
      console.log(categoryList);
      categoryList.addEventListener('click', () => {
        onBookCardClick(event);
      });
    });
  });
};
export default fillCategories;
