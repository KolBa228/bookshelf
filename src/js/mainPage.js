import fillBestSellers from './fillBestSellers';
import executeWithLoader from './service/executeWithLoader';
import fillCategories from './categories_list';
import './categories_list';
executeWithLoader(async () => {
  await fillBestSellers();
  await fillCategories();
});

// selectedCategoryMarkup();
