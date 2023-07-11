import { log } from 'handlebars';

const modalEl = document.querySelector('.js-mobile-menu');
const btnOpen = document.querySelector('.js-header-open-modal');
const closeBtn = document.querySelector('.js-header-close');
const bodyEl = document.querySelector('body')
const activeEl = document.querySelector('.header-nav-item')


btnOpen.addEventListener('click', onBtnOpenModal);
closeBtn.addEventListener('click', onBtnCloseModal);
activeEl.addEventListener('click', onChangeActive)

function onBtnOpenModal() {
  modalEl.classList.add('is-open');
  closeBtn.classList.remove('is-hidden');
  btnOpen.classList.add('is-hidden');

  bodyEl.style.overflow = 'hidden'
}

function onBtnCloseModal() {
  modalEl.classList.remove('is-open');
  closeBtn.classList.add('is-hidden');
  btnOpen.classList.remove('is-hidden');
  bodyEl.style.overflow = 'auto'
}
function onChangeActive(e) {
}
