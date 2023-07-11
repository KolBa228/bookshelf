import getCategoryList from './service/getCategoryList';
import getCategoryFromBtns from './categories/get_category_from_btn';
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
  categoriesBtn.forEach(e => {
    e.addEventListener('click', () => {
      const category = getCategoryFromBtns();
    });
  });
};
export default fillCategories;
