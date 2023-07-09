import fillBestSellers from './fillBestSellers';
import executeWithLoader from './service/executeWithLoader';
import selectedCategoryMarkup from './selectedcategorymarkup';

fillBestSellers();

executeWithLoader(() => fillBestSellers());

selectedCategoryMarkup();
