function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},i=t.parcelRequire3427;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},t.parcelRequire3427=i),i("amrNH");const n=document.querySelector(".js-mobile-menu"),l=document.querySelector(".js-header-open-modal"),a=document.querySelector(".js-header-close"),r=document.querySelector("body"),c=document.querySelector(".header-nav-item");l.addEventListener("click",function(){n.classList.add("is-open"),a.classList.remove("is-hidden"),l.classList.add("is-hidden"),r.style.overflow="hidden"}),a.addEventListener("click",function(){n.classList.remove("is-open"),a.classList.add("is-hidden"),l.classList.remove("is-hidden"),r.style.overflow="auto"}),c.addEventListener("click",function(e){console.log(e)});var d=i("kwJfa"),u=i("2wKSg");const p=async()=>{let e=await (0,u.fetchData)({path:d.apiConfig.getCategoryList,method:"GET"});return e},m=document.querySelector(".categories-list"),g=async()=>{let e=await p(),t=[`<li class="categories-list-item">
      <button class="categories-button all-categories-button" type="button">
      All categories
      </button>
    </li>`],o=e.map(e=>`
    <li class="categories-list-item">
      <button class="categories-button" type="button">
      ${e.list_name}
      </button>
    </li>`);m.innerHTML=t.join(" ")+o.join(" ")},h=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://i.ibb.co/ZKXN8rg/sup1.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://i.ibb.co/JdtRHqp/sup2.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://i.ibb.co/H4dVTTK/sup3.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://i.ibb.co/p4CWCH5/sup4.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://i.ibb.co/CVJQ8Gz/sup5.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://i.ibb.co/tLVRLhJ/sup6.png"},{title:"World vision",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://i.ibb.co/b5zgNMz/sup7.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://www.wvi.org/emergencies/ukraine",img:"https://i.ibb.co/Bs51z6p/sup8.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://i.ibb.co/gDs4nFt/sup9.png"}],b=document.querySelector(".support-list"),k=document.getElementById("button");k.addEventListener("click",function(){let e=document.getElementById("support-list"),t=e.firstElementChild,o="World vision"===t.alt;t.classList.add("hidden"),e.removeChild(t),setTimeout(()=>{o?e.insertBefore(t,e.firstChild):e.appendChild(t),t.classList.remove("hidden")},300)});var y=i("7Y9D8");i("bnXZF");var f=i("6Fp35"),d=i("kwJfa"),u=i("2wKSg");const v=async e=>{let t=await (0,u.fetchData)({path:`${d.apiConfig.getBookById}/${e}`,method:"GET"});return t};i("j4gZM");const L=document.querySelector(".selected-category-books-list");async function w(t){if(t.preventDefault(),"UL"===t.target.nodeName)return;let o=t.target.closest(".pop-up-item"),s=await v(o.id),i=`<div class='book-modal-container'>
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
    </button>`;f.popUp.innerHTML=i;let n=document.querySelector(".book-modal-btn"),l=document.querySelector(".book-modal-close");n.addEventListener("click",()=>r());let a=()=>{(0,f.backDrop).classList.add("hidden"),(0,f.popUp).classList.add("hidden"),document.body.style.overflow="scroll"},r=()=>{let t=JSON.parse(localStorage.getItem("bookList"));Array.isArray(t)||(t=[]);let o=s._id;t.includes(o)?e(y).Notify.warning("This book is already in the list"):(t.push(o),localStorage.setItem("bookList",JSON.stringify(t)),e(y).Notify.success("Book has been added successfully"))};l.addEventListener("click",()=>a()),(0,f.backDrop).addEventListener("click",e=>{e.target.classList.value.includes("backdrop")&&a()}),document.addEventListener("keydown",function(e){"Escape"!==e.key||(0,f.backDrop).classList.contains("hidden")||a()}),(0,f.backDrop).classList.remove("hidden"),(0,f.popUp).classList.remove("hidden"),document.body.style.overflow="hidden"}(0,f.bookCards).forEach(e=>{e.addEventListener("click",w)}),L.addEventListener("click",w),function(){let e=document.querySelector("#dn");e.addEventListener("click",function(e){(function(){let e=document.documentElement,t="light"===e.getAttribute("data-theme")?"dark":"light";e.setAttribute("data-theme",t),localStorage.setItem("theme",t)})()}),"dark"===localStorage.getItem("theme")&&document.documentElement.setAttribute("data-theme","dark")}(),i("amrNH");const S=document.querySelector(".books-shoppingList");console.dir(S);const E=localStorage.getItem("bookList");JSON.parse(E);const q=async()=>{let e=await v("643282b2e85766588626a12a");console.log(e)};q(),(()=>{let e={openModalBtn:document.querySelector(".header-open-modal-btn"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const j=document.querySelector(".js-sendUp"),C=document.querySelector(".js-sendIn"),M=document.querySelector(".js-up"),N=document.querySelector(".js-in");M.addEventListener("click",function(){M.classList.add("hover-color"),N.classList.remove("hover-color"),j.classList.remove("is-display"),C.classList.add("is-display")}),N.addEventListener("click",function(){M.classList.remove("hover-color"),N.classList.add("hover-color"),j.classList.add("is-display"),C.classList.remove("is-display")}),function(){let e=document.querySelector(".dn"),t="true"===localStorage.getItem("toggleState");e.checked=t,e.addEventListener("change",function(){localStorage.setItem("toggleState",e.checked)})}(),function(){let e="",t=0;h.forEach(o=>{let{title:s,url:i,img:n}=o;t+=1;let l=`
      <li class="support_item">
        <a class="support_a" href="${i}"><span>0${t}</span>
          <img class="sup-img" src="${n}" alt="${s}">
        </a>
      </li>`;e+=l}),b.insertAdjacentHTML("beforeend",e)}(),g();
//# sourceMappingURL=main.f50e7bdf.js.map
