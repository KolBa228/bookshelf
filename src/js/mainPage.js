import fillBestSellers from './fillBestSellers';
import executeWithLoader from './service/executeWithLoader';

fillBestSellers();

executeWithLoader(() => fillBestSellers());

import './selectedcategorymarkup';