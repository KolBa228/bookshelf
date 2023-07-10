!function(){let e,t;function o(e,t,o,i){Object.defineProperty(e,t,{get:o,set:i,enumerable:!0,configurable:!0})}function i(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},a=s.parcelRequire3427;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},s.parcelRequire3427=a),a.register("iE7OH",function(e,t){"use strict";o(e.exports,"register",function(){return i},function(e){return i=e}),o(e.exports,"resolve",function(){return s},function(e){return s=e});var i,s,n={};i=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)n[t[o]]=e[t[o]]},s=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("aNJCr",function(e,t){o(e.exports,"getBundleURL",function(){return i},function(e){return i=e});"use strict";var i,s={};i=function(e){var t=s[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),s[e]=t),t}}),a("iE7OH").register(JSON.parse('{"EVgbq":"main.c27cdc82.js","1idPu":"emptySmall.08a2b864.png","6hZEU":"emptyLarge@2x.c88e1f7f.png","eaJtY":"main.ec0ea8ef.js"}')),a("WMajR");let r=document.querySelector(".js-mobile-menu"),c=document.querySelector(".js-header-open-modal"),d=document.querySelector(".js-header-close"),u=document.querySelector("body"),p=document.querySelector(".header-nav-item");c.addEventListener("click",function(){r.classList.add("is-open"),d.classList.remove("is-hidden"),c.classList.add("is-hidden"),u.style.overflow="hidden"}),d.addEventListener("click",function(){r.classList.remove("is-open"),d.classList.add("is-hidden"),c.classList.remove("is-hidden"),u.style.overflow="auto"}),p.addEventListener("click",function(e){console.log(e)});var g=a("ebqVR"),h=a("3KxZJ");let m=async()=>{let e=await (0,h.fetchData)({path:g.apiConfig.getCategoryList,method:"GET"});return e},b=document.querySelector(".categories-list"),f=async()=>{let e=await m(),t=e.map(e=>`<li class="categories-list-item"><button class="categories-button" type="button">${e.list_name}</button></li>`);b.innerHTML='<li class="categories-list-item">       <button class="categories-button active-button" type="button">       All categories       </button></li>'+t.join(" ")},v=document.querySelector(".support-list"),y=document.getElementById("button");y.addEventListener("click",function(){let e=document.getElementById("support-list"),t=e.firstElementChild,o="World vision"===t.alt;t.classList.add("hidden"),e.removeChild(t),setTimeout(()=>{o?e.insertBefore(t,e.firstChild):e.appendChild(t),t.classList.remove("hidden")},300)});var k=a("6JpON");a("aiOVF");var L=a("bjUiu"),g=a("ebqVR"),h=a("3KxZJ");let E=async e=>{let t=await (0,h.fetchData)({path:`${g.apiConfig.getBookById}/${e}`,method:"GET"});return t};a("bjEzK");let w=document.querySelector(".selected-category-books-list");async function S(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;let t=e.target.closest(".pop-up-item"),o=await E(t.id),s=`<div class='book-modal-container'>
  <img src="${o.book_image}" alt="${o.title}" class="book-modal-img"/>
  
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${o.title}</h2>
        <h3 class="book-modal-author">${o.author}</h3>
        <p class='book-modal-desc'>${o.description}</p>
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
    </button>`;L.popUp.innerHTML=s;let n=document.querySelector(".book-modal-btn"),l=document.querySelector(".book-modal-close");n.addEventListener("click",()=>r());let a=()=>{(0,L.backDrop).classList.add("hidden"),(0,L.popUp).classList.add("hidden"),document.body.style.overflow="scroll"},r=()=>{let e=JSON.parse(localStorage.getItem("bookList"));Array.isArray(e)||(e=[]);let t=o._id;e.includes(t)?i(k).Notify.warning("This book is already in the list"):(e.push(t),localStorage.setItem("bookList",JSON.stringify(e)),i(k).Notify.success("Book has been added successfully"))};l.addEventListener("click",()=>a()),(0,L.backDrop).addEventListener("click",e=>{e.target.classList.value.includes("backdrop")&&a()}),document.addEventListener("keydown",function(e){"Escape"!==e.key||(0,L.backDrop).classList.contains("hidden")||a()}),(0,L.backDrop).classList.remove("hidden"),(0,L.popUp).classList.remove("hidden"),document.body.style.overflow="hidden"}(0,L.bookCards).forEach(e=>{e.addEventListener("click",S)}),w.addEventListener("click",S),function(){let e=document.querySelector("#dn");e.addEventListener("click",function(e){(function(){let e=document.documentElement,t="light"===e.getAttribute("data-theme")?"dark":"light";e.setAttribute("data-theme",t),localStorage.setItem("theme",t)})()}),"dark"===localStorage.getItem("theme")&&document.documentElement.setAttribute("data-theme","dark")}(),a("WMajR");let q="bookList",_=document.querySelector(".books-shoppingList");var $={};$=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("6hZEU");let j=new URL($);var C={};C=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("1idPu");let H=new URL(C),x=`<li><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${j} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${H}"
    alt="Book"
  />
</picture>
</a></li>`,J=localStorage.getItem(q),N=JSON.parse(J),O=async()=>{let e=[];for(let t=0;t<N.length;t++){let o=await E(N[t]);console.log(o),e.push(o)}!function(e){let t=Array.isArray(e)?e:[e],o="";for(let e of t)o+=`<li class="shoppingList-item">
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
          </li>`;_.innerHTML=o}(e)};O(),function(){let e=localStorage.getItem(q),t=JSON.parse(e);t&&t.length>0?O():_.innerHTML=x}(),(()=>{let e={openModalBtn:document.querySelector(".header-open-modal-btn"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();let R=document.querySelector(".js-sendUp"),M=document.querySelector(".js-sendIn"),T=document.querySelector(".js-up"),U=document.querySelector(".js-in");T.addEventListener("click",function(){T.classList.add("hover-color"),U.classList.remove("hover-color"),R.classList.remove("is-display"),M.classList.add("is-display")}),U.addEventListener("click",function(){T.classList.remove("hover-color"),U.classList.add("hover-color"),R.classList.add("is-display"),M.classList.remove("is-display")}),function(){let e=document.querySelector(".dn"),t="true"===localStorage.getItem("toggleState");e.checked=t,e.addEventListener("change",function(){localStorage.setItem("toggleState",e.checked)})}(),e="",t=0,[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://i.ibb.co/ZKXN8rg/sup1.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://i.ibb.co/JdtRHqp/sup2.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://i.ibb.co/H4dVTTK/sup3.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://i.ibb.co/p4CWCH5/sup4.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://i.ibb.co/CVJQ8Gz/sup5.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://i.ibb.co/tLVRLhJ/sup6.png"},{title:"World vision",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://i.ibb.co/b5zgNMz/sup7.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://www.wvi.org/emergencies/ukraine",img:"https://i.ibb.co/Bs51z6p/sup8.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://i.ibb.co/gDs4nFt/sup9.png"}].forEach(o=>{let{title:i,url:s,img:n}=o;t+=1;let l=`
      <li class="support_item">
        <a class="support_a" href="${s}"><span>0${t}</span>
          <img class="sup-img" src="${n}" alt="${i}">
        </a>
      </li>`;e+=l}),v.insertAdjacentHTML("beforeend",e),f()}();
//# sourceMappingURL=main.c27cdc82.js.map
