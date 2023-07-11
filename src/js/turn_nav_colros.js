const homeNavBtn = document.querySelectorAll('.active-home')
const shopingNavBtn = document.querySelectorAll('.active-shoping')


const pageTitle = document.title
function tooglePageTitle() {

    if (window.location.pathname === '/shoping_list.html') {

        homeNavBtn.forEach((el) => {
            el.classList.remove('active')
        })
        shopingNavBtn.forEach((el) => {
            el.classList.add('active')
        })



    } return
}
tooglePageTitle()

