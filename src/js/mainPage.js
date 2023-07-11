import fillBestSellers from './fillBestSellers';
import executeWithLoader from './service/executeWithLoader';
import selectedCategoryMarkup from './categories/selectedcategorymarkup';
import fillCategories from './categories_list';

executeWithLoader(() => {
  fillBestSellers();
  fillCategories();
});

selectedCategoryMarkup();
