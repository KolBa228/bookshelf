!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=e.parcelRequire3427;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var s=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequire3427=s),s("iE7OH").register(JSON.parse('{"jMc91":"shoping_list.1da5a02c.js","4BzQQ":"symbol-defs.1b980632.svg","1idPu":"emptySmall.08a2b864.png","6hZEU":"emptyLarge@2x.c88e1f7f.png","6s6ai":"main.578a73d3.js"}'));var a=s("2XllU"),l=s("gzmIx"),o={};o=s("aNJCr").getBundleURL("jMc91")+s("iE7OH").resolve("4BzQQ");let n="bookList",r=document.querySelector(".books-shoppingList");var p={};p=s("aNJCr").getBundleURL("jMc91")+s("iE7OH").resolve("6hZEU");let c=new URL(p);var g={};g=s("aNJCr").getBundleURL("jMc91")+s("iE7OH").resolve("1idPu");let d=new URL(g);async function h(){let e=localStorage.getItem(n),t=JSON.parse(e);t&&t.length>0?await f():r.innerHTML=u}let u=`<li class="shoppingList-empty-item"><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${c} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${d}"
    alt="Book"
  />
</picture>
</a></li>`,f=async()=>{let e=localStorage.getItem(n),t=JSON.parse(e),i=[];for(let e=0;e<t.length;e++){let s=await (0,l.default)(t[e]);i.push(s)}!function(e){let t=Array.isArray(e)?e:[e],i="";for(let e of t){var s;i+=`<li class="shoppingList-item ">
        <img class="shoppingList-img" src=${e.book_image} alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">${e.title}</h2>
              <p class="shoppingList-category">${e.list_name}</p>
            </div>
            <button class="shoppingList-trash-btn" id=${e._id} alt='delete-book'>
            <svg class='shoppingList-icon-trash'><use href='${(s=o)&&s.__esModule?s.default:s}#icon-trash'></use></svg>
            </button>
          </div>
          <p class="shoppingList-content">
          ${e.description}
          </p>
          <div class="shoppingList-link-container">
            <p class="text-shoppingList-author">${e.author}</p>
            <ul class='icon-book-modal-list shopping-list'>
            <li>
                <a href=${e.buy_links[0].url} target="_blank">
                <img src="https://i.ibb.co/vvPnCJ6/1-amazon.png" alt="amazon" class="image-link1">
                </a>
            </li>
            <li>
                <a href=${e.buy_links[1].url} target="_blank">
                <img src="https://i.ibb.co/nj6G7gJ/2-ibook.png" alt="ibook" class="image-link2">
                </a>
            </li>
            <li>
                <a href=${e.buy_links[4].url} target="_blank">
                <img src="https://i.ibb.co/fFPnVJN/3-bookshop.png" alt="bookshop" class="image-link2">
                </a>
            </li>
              </div>
            </div>
          </li>`}r.innerHTML=i}(i);let s=document.querySelectorAll(".shoppingList-trash-btn");s.forEach(e=>{e.addEventListener("click",e=>{let t=JSON.parse(localStorage.getItem(n)),i=e.target.id,s=t.filter(e=>i!==e);localStorage.setItem("bookList",JSON.stringify(s)),h()})})};(0,a.default)(async()=>{await h()})}();
//# sourceMappingURL=shoping_list.1da5a02c.js.map
