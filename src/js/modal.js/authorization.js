// const onBtnModalAuthorization = document.querySelector('.openModal');
// onBtnModalAuthorization.addEventListener('click',modalAuthorization)
// function modalAuthorization(){

// }

(() => {
  const refs = {
    openModalBtn: document.querySelector('.header-open-modal-btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const sendBtnUp = document.querySelector('.js-sendUp');
const sendBtnIn = document.querySelector('.js-sendIn');
const onBtnChangeUP = document.querySelector('.js-up');
const onBtnChangeIN = document.querySelector('.js-in');
onBtnChangeUP.addEventListener('click', changeModalUp);
function changeModalUp() {
  onBtnChangeUP.classList.add('hover-color');
  onBtnChangeIN.classList.remove('hover-color');
  sendBtnUp.classList.remove('is-display');
  sendBtnIn.classList.add('is-display');
}

onBtnChangeIN.addEventListener('click', changeModalIn);
function changeModalIn() {
  onBtnChangeUP.classList.remove('hover-color');
  onBtnChangeIN.classList.add('hover-color');
  sendBtnUp.classList.add('is-display');
  sendBtnIn.classList.remove('is-display');
}
