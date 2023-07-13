const homeNavBtn = document.querySelectorAll('.active-home');
const shopingNavBtn = document.querySelectorAll('.active-shoping');
const shopingModalIcon = document.querySelectorAll('.header-uli-svg')

const pageTitle = document.title;
function tooglePageTitle() {
    if (
      window.location.pathname === '/cringe-team-top-project/shoping_list.html'
    ) {
      homeNavBtn.forEach(el => {
        el.classList.remove('active');
        
      });
      shopingNavBtn.forEach(el => {
        el.classList.add('active');
        
      });
      shopingModalIcon.forEach(el => {
        el.classList.add('active-icon');
        
      });
    }
    return;
}

tooglePageTitle();
