!function(){let e,t;function n(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},l=i.parcelRequire3427;null==l&&((l=function(e){if(e in s)return s[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},i.parcelRequire3427=l),l.register("iE7OH",function(e,t){"use strict";n(e.exports,"register",function(){return o},function(e){return o=e}),n(e.exports,"resolve",function(){return i},function(e){return i=e});var o,i,s={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l.register("aNJCr",function(e,t){n(e.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,i={};o=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),l("iE7OH").register(JSON.parse('{"EVgbq":"main.0f23463c.js","1idPu":"emptySmall.08a2b864.png","6hZEU":"emptyLarge@2x.c88e1f7f.png","eaJtY":"main.ec0ea8ef.js"}')),l("WMajR");let c=document.querySelector(".js-mobile-menu"),r=document.querySelector(".js-header-open-modal"),d=document.querySelector(".js-header-close"),u=document.querySelector("body"),p=document.querySelector(".header-nav-item");r.addEventListener("click",function(){c.classList.add("is-open"),d.classList.remove("is-hidden"),r.classList.add("is-hidden"),u.style.overflow="hidden"}),d.addEventListener("click",function(){c.classList.remove("is-open"),d.classList.add("is-hidden"),r.classList.remove("is-hidden"),u.style.overflow="auto"}),p.addEventListener("click",function(e){console.log(e)});var m=l("ebqVR"),g=l("3KxZJ");let h=async()=>{let e=await (0,g.fetchData)({path:m.apiConfig.getCategoryList,method:"GET"});return e},b=document.querySelector(".categories-list"),f=async()=>{let e=await h(),t=e.map(e=>`<li class="categories-list-item"><button class="categories-button" type="button">${e.list_name}</button></li>`);b.innerHTML='<li class="categories-list-item">       <button class="categories-button active-button" type="button">       All categories       </button></li>'+t.join(" ")},y=document.querySelector(".support-list"),v=document.getElementById("button");v.addEventListener("click",function(){let e=document.getElementById("support-list"),t=e.firstElementChild,n="World vision"===t.alt;t.classList.add("hidden"),e.removeChild(t),setTimeout(()=>{n?e.insertBefore(t,e.firstChild):e.appendChild(t),t.classList.remove("hidden")},300)});var k=l("6JpON");l("aiOVF");var L=l("bjUiu"),m=l("ebqVR"),g=l("3KxZJ");let E=async e=>{let t=await (0,g.fetchData)({path:`${m.apiConfig.getBookById}/${e}`,method:"GET"});return t};l("bjEzK");let w=document.querySelector(".selected-category-books-list");async function S(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;let t=e.target.closest(".pop-up-item"),n=await E(t.id),i=`<div class='book-modal-container'>
  <img src="${n.book_image}" alt="${n.title}" class="book-modal-img"/>
  
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${n.title}</h2>
        <h3 class="book-modal-author">${n.author}</h3>
        <p class='book-modal-desc'>${n.description}</p>
        <ul class='icon-book-modal-list'>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/vvPnCJ6/1-amazon.png" alt="amazon">
            </a>
        </li>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/nj6G7gJ/2-ibook.png" alt="ibook">
            </a>
        </li>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/fFPnVJN/3-bookshop.png" alt="bookshop">
            </a>
        </li>
        </ul>
    </div>
    </div>

    <button type="button" class='book-modal-btn js-add' id='js-book-modal-btn'>Add to shopping list</button>

    <button class='book-modal-close' id='js-book-modal-btn-close'>
    <svg class='icon-book-modal-close'><use href='./img/symbol-defs.svg#icon-close'></use></svg>
    </button>`;L.popUp.innerHTML=i;let s=document.querySelector(".book-modal-btn"),a=document.querySelector(".book-modal-close");s.addEventListener("click",()=>c());let l=()=>{(0,L.backDrop).classList.add("hidden"),(0,L.popUp).classList.add("hidden"),document.body.style.overflow="scroll"},c=()=>{let e=JSON.parse(localStorage.getItem("bookList"));Array.isArray(e)||(e=[]);let t=n._id;e.includes(t)?o(k).Notify.warning("This book is already in the list"):(e.push(t),localStorage.setItem("bookList",JSON.stringify(e)),o(k).Notify.success("Book has been added successfully"))};a.addEventListener("click",()=>l()),(0,L.backDrop).addEventListener("click",e=>{e.target.classList.value.includes("backdrop")&&l()}),document.addEventListener("keydown",function(e){"Escape"!==e.key||(0,L.backDrop).classList.contains("hidden")||l()}),(0,L.backDrop).classList.remove("hidden"),(0,L.popUp).classList.remove("hidden"),document.body.style.overflow="hidden"}(0,L.bookCards).forEach(e=>{e.addEventListener("click",S)}),w.addEventListener("click",S),function(){let e=document.querySelector("#dn");e.addEventListener("click",function(e){(function(){let e=document.documentElement,t="light"===e.getAttribute("data-theme")?"dark":"light";e.setAttribute("data-theme",t),localStorage.setItem("theme",t)})()}),"dark"===localStorage.getItem("theme")&&document.documentElement.setAttribute("data-theme","dark")}(),l("WMajR");let I="bookList",B=document.querySelector(".books-shoppingList");var q={};q=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("6hZEU");let $=new URL(q);var _={};_=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("1idPu");let H=new URL(_),C=`<li><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${$} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${H}"
    alt="Book"
  />
</picture>
</a></li>`,j=localStorage.getItem(I),U=JSON.parse(j),N=async()=>{let e=[];for(let t=0;t<U.length;t++){let n=await E(U[t]);console.log(n),e.push(n)}!function(e){let t=Array.isArray(e)?e:[e],n="";for(let e of t)n+=`<li class="shoppingList-item">
        <img class="shoppingList-img" src=${e.book_image} alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">${e.title}</h2>
              <p class="shoppingList-category">${e.list_name}</p>
            </div>
            <button class="shoppingList-trash-btn" id=${e._id}>
              <svg class="shoppingList-icon-trash">
                <use href="./img/symbol-defs.svg#icon-trash"></use>
              </svg>
            </button>
            </button>
          </div>
          <p class="shoppingList-content">
          ${e.description}
          </p>
          <div class="shoppingList-link-container">
            <p class="text-shoppingList-author">${e.author}</p>
            <ul class="box-shoppingList-shop">
              <li>
                <a class="shop-shoppingList-link" href=${e.buy_links[0]}>
                  <img
                    class="shop-shoppingList-img1"
                    src="./img/amazon.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  class="shop-shoppingList-link"
                  href=${e.buy_links[1]}
                >
                  <img
                    class="shop-shoppingList-img2"
                    src="./img/book.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  class="shop-shoppingList-link"
                  href=${e.buy_links[4]}
                >
                  <img
                    class="shop-shoppingList-img2"
                    src="./img/bookshop.png"
                    alt=""
                  />
                </a>
              </li> 
              </ul>
              </div>
            </div>
          </li>`;B.innerHTML=n}(e)};N(),function(){let e=localStorage.getItem(I),t=JSON.parse(e);t&&t.length>0?N():B.innerHTML=C}(),(()=>{let e={openModalBtn:document.querySelector(".header-open-modal-btn"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();let x=document.querySelector(".js-sendUp"),A=document.querySelector(".js-sendIn"),R=document.querySelector(".js-up"),M=document.querySelector(".js-in");function O(){let e=firebase.auth().currentUser;if(e){let t=firebase.database().ref("comments");t.on("value",function(t){let n=document.getElementById("comments");n.innerHTML="",t.forEach(function(t){let o=t.val(),i=t.key;if(o.userId===e.uid){let e=document.createElement("div");e.innerHTML=`
            <span>${o.comment}</span>
            <button id="${i}">Видалити</button>
          `,n.appendChild(e),document.getElementById(i).addEventListener("click",function(){(function(e){let t=firebase.auth().currentUser;if(t){let n=firebase.database().ref("comments").child(e);n.once("value",function(e){let o=e.val();o.userId===t.uid&&n.remove().then(function(){O()}).catch(function(e){console.log(e)})})}})(i)})}})})}}function T(){let e=document.getElementById("auth-container"),t=document.getElementById("comments-container"),n=firebase.auth().currentUser.displayName,o=document.getElementById("user-name");o.textContent="Вітаємо, "+n+"!",e.style.display="none",t.style.display="block"}function J(){let e=document.getElementById("auth-container"),t=document.getElementById("comments-container");e.style.display="block",t.style.display="none"}R.addEventListener("click",function(){R.classList.add("hover-color"),M.classList.remove("hover-color"),x.classList.remove("is-display"),A.classList.add("is-display")}),M.addEventListener("click",function(){R.classList.remove("hover-color"),M.classList.add("hover-color"),x.classList.add("is-display"),A.classList.remove("is-display")}),firebase.initializeApp({apiKey:"AIzaSyBQHHf9PHllCE_RcrTF99QZWE74QZNvhho",authDomain:"wowa-kalinin-progect.firebaseapp.com",projectId:"wowa-kalinin-progect",storageBucket:"wowa-kalinin-progect.appspot.com",messagingSenderId:"418237658667",appId:"1:418237658667:web:c2e7ac3839d217356b1c6e",databaseURL:"https://wowa-kalinin-progect-default-rtdb.europe-west1.firebasedatabase.app/",measurementId:"G-PF0Y9DKB6P"}),document.getElementById("signup-btn").addEventListener("click",function(){let e=document.getElementById("email").value,t=document.getElementById("password").value,n=document.getElementById("name").value;firebase.auth().createUserWithEmailAndPassword(e,t).then(function(e){let t=e.user;t.updateProfile({displayName:n}).then(function(){T()}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}),document.getElementById("signin-btn").addEventListener("click",function(){let e=document.getElementById("email").value,t=document.getElementById("password").value;firebase.auth().signInWithEmailAndPassword(e,t).then(function(){T(),O()}).catch(function(e){console.log(e)})}),document.getElementById("signout-btn").addEventListener("click",function(){firebase.auth().signOut().then(function(){J()}).catch(function(e){console.log(e)})}),document.getElementById("add-comment-btn").addEventListener("click",function(){let e=firebase.auth().currentUser,t=document.getElementById("comment-input").value;if(e){let n=firebase.database().ref("comments");n.push().set({userId:e.uid,comment:t}).then(function(){document.getElementById("comment-input").value="",O()}).catch(function(e){console.log(e)})}}),firebase.auth().onAuthStateChanged(function(e){e?(T(),O()):J()}),function(){let e=document.querySelector(".dn"),t="true"===localStorage.getItem("toggleState");e.checked=t,e.addEventListener("change",function(){localStorage.setItem("toggleState",e.checked)})}(),e="",t=0,[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://i.ibb.co/ZKXN8rg/sup1.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://i.ibb.co/JdtRHqp/sup2.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://i.ibb.co/H4dVTTK/sup3.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://i.ibb.co/p4CWCH5/sup4.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://i.ibb.co/CVJQ8Gz/sup5.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://i.ibb.co/tLVRLhJ/sup6.png"},{title:"World vision",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://i.ibb.co/b5zgNMz/sup7.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://www.wvi.org/emergencies/ukraine",img:"https://i.ibb.co/Bs51z6p/sup8.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://i.ibb.co/gDs4nFt/sup9.png"}].forEach(n=>{let{title:o,url:i,img:s}=n;t+=1;let a=`
      <li class="support_item">
        <a class="support_a" href="${i}"><span>0${t}</span>
          <img class="sup-img" src="${s}" alt="${o}">
        </a>
      </li>`;e+=a}),y.insertAdjacentHTML("beforeend",e),f()}();
//# sourceMappingURL=main.0f23463c.js.map
