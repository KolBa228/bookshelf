import getCategoryList from './js/service/getCategoryList';

import './js/categories_list';
import categoriesList from './js/categories_list';
import { suppMarkup } from './js/create_supp_items';
import { suppCases } from './js/create_supp_items';
import './js/supp_swiper';
import { createMarkup } from './js/popup/createMarkup';

const button = document.querySelector('.test');

suppMarkup();

categoriesList()