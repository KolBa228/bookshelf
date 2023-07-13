const homeNavBtn = document.querySelectorAll('.active-home');
const shopingNavBtn = document.querySelectorAll('.active-shoping');
const shopingModalIcon = document.querySelectorAll('.header-uli-svg')

const pageTitle = document.title;
function tooglePageTitle() {
    console.log(window.location.pathname);
    if (window.location.pathname === '/shoping_list.html') {
        homeNavBtn.forEach(el => {
            el.classList.remove('active');
            console.log('rwerwerwerwerwerwerweerwqrewrew');
        });
        shopingNavBtn.forEach(el => {
            el.classList.add('active');
            console.log('rwerwerwerwerwerwerweerwqrewrew');
        });
        shopingModalIcon.forEach((el) => {
            el.classList.add('active-icon')
            console.log('rwerwerwerwerwerwerweerwqrewrew');
        })
    }
    return;
}

tooglePageTitle();
