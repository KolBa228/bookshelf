import fillBestSellers from './fillBestSellers';
import executeWithLoader from './service/executeWithLoader';

executeWithLoader(() => fillBestSellers());