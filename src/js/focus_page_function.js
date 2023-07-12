const homeNavBtn = document.querySelector('.active-home');
const shopingNavBtn = document.querySelector('.active-shoping');
const pageTitle = document.title;
function tooglePageTitle() {
    if (pageTitle === 'Shoping List') {
        homeNavBtn.classList.remove('active');
        shopingNavBtn.classList.add('active');
    } return;
};
tooglePageTitle();