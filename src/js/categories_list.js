import getCategoryList from './service/getCategoryList';
const categoriesList = document.querySelector('.categories-list');
const fillCategories = async () => {
  const categories = await getCategoryList();
  const buttonHTML = [
    `<li class="categories-list-item">
      <button class="categories-button all-categories-button" type="button">
      All categories
      </button>
    </li>`,
  ];

  const tempHTML = categories.map(category => {
    return `
    <li class="categories-list-item">
      <button class="categories-button" type="button">
      ${category.list_name}
      </button>
    </li>`;
  });
  categoriesList.innerHTML = buttonHTML.join(' ') + tempHTML.join(' ');
};
export default fillCategories;
