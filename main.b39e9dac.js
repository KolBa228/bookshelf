function t(t,e,o,s){Object.defineProperty(t,e,{get:o,set:s,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},n=o.parcelRequire3427;null==n&&((n=function(t){if(t in s)return s[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return s[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){i[t]=e},o.parcelRequire3427=n),n.register("kyEFX",function(e,o){"use strict";t(e.exports,"register",function(){return s},function(t){return s=t}),t(e.exports,"resolve",function(){return i},function(t){return i=t});var s,i,n={};s=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)n[e[o]]=t[e[o]]},i=function(t){var e=n[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),n("kyEFX").register(JSON.parse('{"5ZPII":"main.b39e9dac.js","1Hmcw":"emptyLarge@2x.c88e1f7f.png","ftxxE":"emptySmall.08a2b864.png","1sHeA":"main.bc390502.js"}')),n("amrNH");const l=document.querySelector(".js-mobile-menu"),a=document.querySelector(".js-header-open-modal"),r=document.querySelector(".js-header-close"),c=document.querySelector("body"),d=document.querySelector(".header-nav-item");a.addEventListener("click",function(){l.classList.add("is-open"),r.classList.remove("is-hidden"),a.classList.add("is-hidden"),c.style.overflow="hidden"}),r.addEventListener("click",function(){l.classList.remove("is-open"),r.classList.add("is-hidden"),a.classList.remove("is-hidden"),c.style.overflow="auto"}),d.addEventListener("click",function(t){console.log(t)});var p=n("kwJfa"),u=n("2wKSg");const g=async()=>{let t=await (0,u.fetchData)({path:p.apiConfig.getCategoryList,method:"GET"});return t},m=document.querySelector(".categories-list"),h=async()=>{let t=await g(),e=t.map(t=>`<li class="categories-list-item"><button class="categories-button" type="button">${t.list_name}</button></li>`);m.innerHTML='<li class="categories-list-item">       <button class="categories-button active-button" type="button">       All categories       </button></li>'+e.join(" ")},b=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://i.ibb.co/ZKXN8rg/sup1.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://i.ibb.co/JdtRHqp/sup2.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://i.ibb.co/H4dVTTK/sup3.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://i.ibb.co/p4CWCH5/sup4.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://i.ibb.co/CVJQ8Gz/sup5.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://i.ibb.co/tLVRLhJ/sup6.png"},{title:"World vision",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://i.ibb.co/b5zgNMz/sup7.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://www.wvi.org/emergencies/ukraine",img:"https://i.ibb.co/Bs51z6p/sup8.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://i.ibb.co/gDs4nFt/sup9.png"}],f=document.querySelector(".support-list"),y=document.getElementById("button");y.addEventListener("click",function(){let t=document.getElementById("support-list"),e=t.firstElementChild,o="World vision"===e.alt;e.classList.add("hidden"),t.removeChild(e),setTimeout(()=>{o?t.insertBefore(e,t.firstChild):t.appendChild(e),e.classList.remove("hidden")},300)});var k=n("7Y9D8");n("bnXZF");var v=n("6Fp35"),p=n("kwJfa"),u=n("2wKSg");const L=async t=>{let e=await (0,u.fetchData)({path:`${p.apiConfig.getBookById}/${t}`,method:"GET"});return e};n("j4gZM");const w=document.querySelector(".selected-category-books-list");async function S(t){if(t.preventDefault(),"UL"===t.target.nodeName)return;let o=t.target.closest(".pop-up-item"),s=await L(o.id),i=`<div class='book-modal-container'>
  <img src="${s.book_image}" alt="${s.title}" class="book-modal-img"/>
  
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${s.title}</h2>
        <h3 class="book-modal-author">${s.author}</h3>
        <p class='book-modal-desc'>${s.description}</p>
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
    </button>`;v.popUp.innerHTML=i;let n=document.querySelector(".book-modal-btn"),l=document.querySelector(".book-modal-close");n.addEventListener("click",()=>r());let a=()=>{(0,v.backDrop).classList.add("hidden"),(0,v.popUp).classList.add("hidden"),document.body.style.overflow="scroll"},r=()=>{let t=JSON.parse(localStorage.getItem("bookList"));Array.isArray(t)||(t=[]);let o=s._id;t.includes(o)?e(k).Notify.warning("This book is already in the list"):(t.push(o),localStorage.setItem("bookList",JSON.stringify(t)),e(k).Notify.success("Book has been added successfully"))};l.addEventListener("click",()=>a()),(0,v.backDrop).addEventListener("click",t=>{t.target.classList.value.includes("backdrop")&&a()}),document.addEventListener("keydown",function(t){"Escape"!==t.key||(0,v.backDrop).classList.contains("hidden")||a()}),(0,v.backDrop).classList.remove("hidden"),(0,v.popUp).classList.remove("hidden"),document.body.style.overflow="hidden"}(0,v.bookCards).forEach(t=>{t.addEventListener("click",S)}),w.addEventListener("click",S),function(){let t=document.querySelector("#dn");t.addEventListener("click",function(t){(function(){let t=document.documentElement,e="light"===t.getAttribute("data-theme")?"dark":"light";t.setAttribute("data-theme",e),localStorage.setItem("theme",e)})()}),"dark"===localStorage.getItem("theme")&&document.documentElement.setAttribute("data-theme","dark")}(),n("amrNH");const E="bookList",_=document.querySelector(".books-shoppingList");var q={};q=new URL(n("kyEFX").resolve("1Hmcw"),import.meta.url).toString();let $=new URL(q);var H={};H=new URL(n("kyEFX").resolve("ftxxE"),import.meta.url).toString();let j=new URL(H);const x=`<li><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${$} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${j}"
    alt="Book"
  />
</picture>
</a></li>`,C=localStorage.getItem(E),A=JSON.parse(C),F=async()=>{let t=[];for(let e=0;e<A.length;e++){let o=await L(A[e]);console.log(o),t.push(o)}!function(t){let e=Array.isArray(t)?t:[t],o="";for(let t of e)o+=`<li class="shoppingList-item">
        <img class="shoppingList-img" src=${t.book_image} alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">${t.title}</h2>
              <p class="shoppingList-category">${t.list_name}</p>
            </div>
            <button class="shoppingList-trash-btn" id=${t._id}>
              <svg class="shoppingList-icon-trash">
                <use href="./img/symbol-defs.svg#icon-trash"></use>
              </svg>
            </button>
            </button>
          </div>
          <p class="shoppingList-content">
          ${t.description}
          </p>
          <div class="shoppingList-link-container">
            <p class="text-shoppingList-author">${t.author}</p>
            <ul class="box-shoppingList-shop">
              <li>
                <a class="shop-shoppingList-link" href=${t.buy_links[0]}>
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
                  href=${t.buy_links[1]}
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
                  href=${t.buy_links[4]}
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
          </li>`;_.innerHTML=o}(t)};F(),function(){let t=localStorage.getItem(E),e=JSON.parse(t);e&&e.length>0?F():_.innerHTML=x}(),(()=>{let t={openModalBtn:document.querySelector(".header-open-modal-btn"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})();const I=document.querySelector(".js-sendUp"),M=document.querySelector(".js-sendIn"),N=document.querySelector(".js-up"),T=document.querySelector(".js-in");N.addEventListener("click",function(){N.classList.add("hover-color"),T.classList.remove("hover-color"),I.classList.remove("is-display"),M.classList.add("is-display")}),T.addEventListener("click",function(){N.classList.remove("hover-color"),T.classList.add("hover-color"),I.classList.add("is-display"),M.classList.remove("is-display")}),function(){let t=document.querySelector(".dn"),e="true"===localStorage.getItem("toggleState");t.checked=e,t.addEventListener("change",function(){localStorage.setItem("toggleState",t.checked)})}(),function(){let t="",e=0;b.forEach(o=>{let{title:s,url:i,img:n}=o;e+=1;let l=`
      <li class="support_item">
        <a class="support_a" href="${i}"><span>0${e}</span>
          <img class="sup-img" src="${n}" alt="${s}">
        </a>
      </li>`;t+=l}),f.insertAdjacentHTML("beforeend",t)}(),h();
//# sourceMappingURL=main.b39e9dac.js.map
