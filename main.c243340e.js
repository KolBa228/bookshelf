function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=o.parcelRequire3427;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},o.parcelRequire3427=s),s.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,s={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},i=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("kyEFX").register(JSON.parse('{"5ZPII":"main.c243340e.js","1Hmcw":"emptyLarge@2x.c88e1f7f.png","ftxxE":"emptySmall.08a2b864.png","1sHeA":"main.bc390502.js"}')),s("amrNH");const a=document.querySelector(".js-mobile-menu"),l=document.querySelector(".js-header-open-modal"),c=document.querySelector(".js-header-close"),r=document.querySelector("body"),d=document.querySelector(".header-nav-item");l.addEventListener("click",function(){a.classList.add("is-open"),c.classList.remove("is-hidden"),l.classList.add("is-hidden"),r.style.overflow="hidden"}),c.addEventListener("click",function(){a.classList.remove("is-open"),c.classList.add("is-hidden"),l.classList.remove("is-hidden"),r.style.overflow="auto"}),d.addEventListener("click",function(e){console.log(e)});var u=s("kwJfa"),p=s("2wKSg");const m=async()=>{let e=await (0,p.fetchData)({path:u.apiConfig.getCategoryList,method:"GET"});return e},g=document.querySelector(".categories-list"),h=async()=>{let e=await m(),t=e.map(e=>`<li class="categories-list-item"><button class="categories-button" type="button">${e.list_name}</button></li>`);g.innerHTML='<li class="categories-list-item">       <button class="categories-button active-button" type="button">       All categories       </button></li>'+t.join(" ")},b=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://i.ibb.co/ZKXN8rg/sup1.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://i.ibb.co/JdtRHqp/sup2.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://i.ibb.co/H4dVTTK/sup3.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://i.ibb.co/p4CWCH5/sup4.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://i.ibb.co/CVJQ8Gz/sup5.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://i.ibb.co/tLVRLhJ/sup6.png"},{title:"World vision",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://i.ibb.co/b5zgNMz/sup7.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://www.wvi.org/emergencies/ukraine",img:"https://i.ibb.co/Bs51z6p/sup8.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://i.ibb.co/gDs4nFt/sup9.png"}],f=document.querySelector(".support-list"),y=document.getElementById("button");y.addEventListener("click",function(){let e=document.getElementById("support-list"),t=e.firstElementChild,o="World vision"===t.alt;t.classList.add("hidden"),e.removeChild(t),setTimeout(()=>{o?e.insertBefore(t,e.firstChild):e.appendChild(t),t.classList.remove("hidden")},300)});var v=s("7Y9D8");s("bnXZF");var k=s("6Fp35"),u=s("kwJfa"),p=s("2wKSg");const L=async e=>{let t=await (0,p.fetchData)({path:`${u.apiConfig.getBookById}/${e}`,method:"GET"});return t};s("j4gZM");const E=document.querySelector(".selected-category-books-list");async function w(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;let o=e.target.closest(".pop-up-item"),n=await L(o.id),i=`<div class='book-modal-container'>
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
    </button>`;k.popUp.innerHTML=i;let s=document.querySelector(".book-modal-btn"),a=document.querySelector(".book-modal-close");s.addEventListener("click",()=>c());let l=()=>{(0,k.backDrop).classList.add("hidden"),(0,k.popUp).classList.add("hidden"),document.body.style.overflow="scroll"},c=()=>{let e=JSON.parse(localStorage.getItem("bookList"));Array.isArray(e)||(e=[]);let o=n._id;e.includes(o)?t(v).Notify.warning("This book is already in the list"):(e.push(o),localStorage.setItem("bookList",JSON.stringify(e)),t(v).Notify.success("Book has been added successfully"))};a.addEventListener("click",()=>l()),(0,k.backDrop).addEventListener("click",e=>{e.target.classList.value.includes("backdrop")&&l()}),document.addEventListener("keydown",function(e){"Escape"!==e.key||(0,k.backDrop).classList.contains("hidden")||l()}),(0,k.backDrop).classList.remove("hidden"),(0,k.popUp).classList.remove("hidden"),document.body.style.overflow="hidden"}(0,k.bookCards).forEach(e=>{e.addEventListener("click",w)}),E.addEventListener("click",w),function(){let e=document.querySelector("#dn");e.addEventListener("click",function(e){(function(){let e=document.documentElement,t="light"===e.getAttribute("data-theme")?"dark":"light";e.setAttribute("data-theme",t),localStorage.setItem("theme",t)})()}),"dark"===localStorage.getItem("theme")&&document.documentElement.setAttribute("data-theme","dark")}(),s("amrNH");const S="bookList",I=document.querySelector(".books-shoppingList");var B={};B=new URL(s("kyEFX").resolve("1Hmcw"),import.meta.url).toString();let H=new URL(B);var _={};_=new URL(s("kyEFX").resolve("ftxxE"),import.meta.url).toString();let $=new URL(_);const q=`<li><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${H} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${$}"
    alt="Book"
  />
</picture>
</a></li>`,C=localStorage.getItem(S),j=JSON.parse(C),A=async()=>{let e=[];for(let t=0;t<j.length;t++){let o=await L(j[t]);console.log(o),e.push(o)}!function(e){let t=Array.isArray(e)?e:[e],o="";for(let e of t)o+=`<li class="shoppingList-item">
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
          </li>`;I.innerHTML=o}(e)};A(),function(){let e=localStorage.getItem(S),t=JSON.parse(e);t&&t.length>0?A():I.innerHTML=q}(),(()=>{let e={openModalBtn:document.querySelector(".header-open-modal-btn"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const x=document.querySelector(".js-sendUp"),N=document.querySelector(".js-sendIn"),T=document.querySelector(".js-up"),F=document.querySelector(".js-in");function M(){let e=firebase.auth().currentUser;if(e){let t=firebase.database().ref("comments");t.on("value",function(t){let o=document.getElementById("comments");o.innerHTML="",t.forEach(function(t){let n=t.val(),i=t.key;if(n.userId===e.uid){let e=document.createElement("div");e.innerHTML=`
            <span>${n.comment}</span>
            <button id="${i}">Видалити</button>
          `,o.appendChild(e),document.getElementById(i).addEventListener("click",function(){(function(e){let t=firebase.auth().currentUser;if(t){let o=firebase.database().ref("comments").child(e);o.once("value",function(e){let n=e.val();n.userId===t.uid&&o.remove().then(function(){M()}).catch(function(e){console.log(e)})})}})(i)})}})})}}function U(){let e=document.getElementById("auth-container"),t=document.getElementById("comments-container"),o=firebase.auth().currentUser.displayName,n=document.getElementById("user-name");n.textContent="Вітаємо, "+o+"!",e.style.display="none",t.style.display="block"}function R(){let e=document.getElementById("auth-container"),t=document.getElementById("comments-container");e.style.display="block",t.style.display="none"}T.addEventListener("click",function(){T.classList.add("hover-color"),F.classList.remove("hover-color"),x.classList.remove("is-display"),N.classList.add("is-display")}),F.addEventListener("click",function(){T.classList.remove("hover-color"),F.classList.add("hover-color"),x.classList.add("is-display"),N.classList.remove("is-display")}),firebase.initializeApp({apiKey:"AIzaSyBQHHf9PHllCE_RcrTF99QZWE74QZNvhho",authDomain:"wowa-kalinin-progect.firebaseapp.com",projectId:"wowa-kalinin-progect",storageBucket:"wowa-kalinin-progect.appspot.com",messagingSenderId:"418237658667",appId:"1:418237658667:web:c2e7ac3839d217356b1c6e",databaseURL:"https://wowa-kalinin-progect-default-rtdb.europe-west1.firebasedatabase.app/",measurementId:"G-PF0Y9DKB6P"}),document.getElementById("signup-btn").addEventListener("click",function(){let e=document.getElementById("email").value,t=document.getElementById("password").value,o=document.getElementById("name").value;firebase.auth().createUserWithEmailAndPassword(e,t).then(function(e){let t=e.user;t.updateProfile({displayName:o}).then(function(){U()}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}),document.getElementById("signin-btn").addEventListener("click",function(){let e=document.getElementById("email").value,t=document.getElementById("password").value;firebase.auth().signInWithEmailAndPassword(e,t).then(function(){U(),M()}).catch(function(e){console.log(e)})}),document.getElementById("signout-btn").addEventListener("click",function(){firebase.auth().signOut().then(function(){R()}).catch(function(e){console.log(e)})}),document.getElementById("add-comment-btn").addEventListener("click",function(){let e=firebase.auth().currentUser,t=document.getElementById("comment-input").value;if(e){let o=firebase.database().ref("comments");o.push().set({userId:e.uid,comment:t}).then(function(){document.getElementById("comment-input").value="",M()}).catch(function(e){console.log(e)})}}),firebase.auth().onAuthStateChanged(function(e){e?(U(),M()):R()}),function(){let e=document.querySelector(".dn"),t="true"===localStorage.getItem("toggleState");e.checked=t,e.addEventListener("change",function(){localStorage.setItem("toggleState",e.checked)})}(),function(){let e="",t=0;b.forEach(o=>{let{title:n,url:i,img:s}=o;t+=1;let a=`
      <li class="support_item">
        <a class="support_a" href="${i}"><span>0${t}</span>
          <img class="sup-img" src="${s}" alt="${n}">
        </a>
      </li>`;e+=a}),f.insertAdjacentHTML("beforeend",e)}(),h();
//# sourceMappingURL=main.c243340e.js.map
