!function(){let e,t;function o(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},l={},n=i.parcelRequire3427;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return s[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},i.parcelRequire3427=n),n("WMajR");let a=document.querySelector(".js-mobile-menu"),r=document.querySelector(".js-header-open-modal"),c=document.querySelector(".js-header-close"),d=document.querySelector("body"),u=document.querySelector(".header-nav-item");r.addEventListener("click",function(){a.classList.add("is-open"),c.classList.remove("is-hidden"),r.classList.add("is-hidden"),d.style.overflow="hidden"}),c.addEventListener("click",function(){a.classList.remove("is-open"),c.classList.add("is-hidden"),r.classList.remove("is-hidden"),d.style.overflow="auto"}),u.addEventListener("click",function(e){console.log(e)});var p=n("ebqVR"),m=n("3KxZJ");let g=async()=>{let e=await (0,m.fetchData)({path:p.apiConfig.getCategoryList,method:"GET"});return e},h=document.querySelector(".categories-list"),b=async()=>{let e=await g(),t=[`<li class="categories-list-item">
      <button class="categories-button all-categories-button" type="button">
      All categories
      </button>
    </li>`],o=e.map(e=>`
    <li class="categories-list-item">
      <button class="categories-button" type="button">
      ${e.list_name}
      </button>
    </li>`);h.innerHTML=t.join(" ")+o.join(" ")},y=document.querySelector(".support-list"),k=document.getElementById("button");k.addEventListener("click",function(){let e=document.getElementById("support-list"),t=e.firstElementChild,o="World vision"===t.alt;t.classList.add("hidden"),e.removeChild(t),setTimeout(()=>{o?e.insertBefore(t,e.firstChild):e.appendChild(t),t.classList.remove("hidden")},300)});var f=n("6JpON");n("aiOVF");var v=n("bjUiu"),p=n("ebqVR"),m=n("3KxZJ");let L=async e=>{let t=await (0,m.fetchData)({path:`${p.apiConfig.getBookById}/${e}`,method:"GET"});return t};n("bjEzK");let w=document.querySelector(".selected-category-books-list");async function S(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;let t=e.target.closest(".pop-up-item"),i=await L(t.id),s=`<div class='book-modal-container'>
  <img src="${i.book_image}" alt="${i.title}" class="book-modal-img"/>
  
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${i.title}</h2>
        <h3 class="book-modal-author">${i.author}</h3>
        <p class='book-modal-desc'>${i.description}</p>
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
    </button>`;v.popUp.innerHTML=s;let l=document.querySelector(".book-modal-btn"),n=document.querySelector(".book-modal-close");l.addEventListener("click",()=>r());let a=()=>{(0,v.backDrop).classList.add("hidden"),(0,v.popUp).classList.add("hidden"),document.body.style.overflow="scroll"},r=()=>{let e=JSON.parse(localStorage.getItem("bookList"));Array.isArray(e)||(e=[]);let t=i._id;e.includes(t)?o(f).Notify.warning("This book is already in the list"):(e.push(t),localStorage.setItem("bookList",JSON.stringify(e)),o(f).Notify.success("Book has been added successfully"))};n.addEventListener("click",()=>a()),(0,v.backDrop).addEventListener("click",e=>{e.target.classList.value.includes("backdrop")&&a()}),document.addEventListener("keydown",function(e){"Escape"!==e.key||(0,v.backDrop).classList.contains("hidden")||a()}),(0,v.backDrop).classList.remove("hidden"),(0,v.popUp).classList.remove("hidden"),document.body.style.overflow="hidden"}(0,v.bookCards).forEach(e=>{e.addEventListener("click",S)}),w.addEventListener("click",S),function(){let e=document.querySelector("#dn");e.addEventListener("click",function(e){(function(){let e=document.documentElement,t="light"===e.getAttribute("data-theme")?"dark":"light";e.setAttribute("data-theme",t),localStorage.setItem("theme",t)})()}),"dark"===localStorage.getItem("theme")&&document.documentElement.setAttribute("data-theme","dark")}(),n("WMajR");let E=document.querySelector(".books-shoppingList");console.dir(E);let q=localStorage.getItem("bookList");JSON.parse(q);let j=async()=>{let e=await L("643282b2e85766588626a12a");console.log(e)};j(),(()=>{let e={openModalBtn:document.querySelector(".header-open-modal-btn"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();let C=document.querySelector(".js-sendUp"),M=document.querySelector(".js-sendIn"),I=document.querySelector(".js-up"),N=document.querySelector(".js-in");I.addEventListener("click",function(){I.classList.add("hover-color"),N.classList.remove("hover-color"),C.classList.remove("is-display"),M.classList.add("is-display")}),N.addEventListener("click",function(){I.classList.remove("hover-color"),N.classList.add("hover-color"),C.classList.add("is-display"),M.classList.remove("is-display")}),function(){let e=document.querySelector(".dn"),t="true"===localStorage.getItem("toggleState");e.checked=t,e.addEventListener("change",function(){localStorage.setItem("toggleState",e.checked)})}(),e="",t=0,[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://i.ibb.co/ZKXN8rg/sup1.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://i.ibb.co/JdtRHqp/sup2.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://i.ibb.co/H4dVTTK/sup3.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://i.ibb.co/p4CWCH5/sup4.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://i.ibb.co/CVJQ8Gz/sup5.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://i.ibb.co/tLVRLhJ/sup6.png"},{title:"World vision",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://i.ibb.co/b5zgNMz/sup7.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://www.wvi.org/emergencies/ukraine",img:"https://i.ibb.co/Bs51z6p/sup8.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://i.ibb.co/gDs4nFt/sup9.png"}].forEach(o=>{let{title:i,url:s,img:l}=o;t+=1;let n=`
      <li class="support_item">
        <a class="support_a" href="${s}"><span>0${t}</span>
          <img class="sup-img" src="${l}" alt="${i}">
        </a>
      </li>`;e+=n}),y.insertAdjacentHTML("beforeend",e),b()}();
//# sourceMappingURL=main.8c584c61.js.map
