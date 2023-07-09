import './js/modal.js/modal';

import getCategoryList from './js/service/getCategoryList';
import './js/categories_list';
import { suppMarkup } from './js/create_supp_items';
import { suppCases } from './js/create_supp_items';
import './js/supp_swiper';
import { createMarkup } from './js/popup/createMarkup';
import fillCategories from './js/categories_list';

const button = document.querySelector('.test');

suppMarkup();

import { createMarkup } from './js/popup/createMarkup';

import * as themeSwitching from './js/theme_switcher';

fillCategories()

const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function() {
  localStorage.setItem('toggleState', toggle.checked);
});