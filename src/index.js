import './js/modal.js/modal';
import getCategoryList from './js/service/getCategoryList';
import './js/categories_list';
import { suppMarkup } from './js/create_supp_items';
import { suppCases } from './js/create_supp_items';
import './js/supp_swiper';

import { popUpMarkup } from './js/popup/popUpMarkup';

import fillCategories from './js/categories_list';
import * as themeSwitching from './js/theme_switcher';
import { log } from 'handlebars';
import fetchTheme from './js/theme_btn';
fetchTheme();
suppMarkup();
fillCategories();
import './js/modal.js/authorization';
import './js/shoppingList';
import './js/modal.js/authorization'; 
import './js/autorization/app'
import './js/autorization/auth'
import './js/autorization/comments'