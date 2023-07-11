!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},s=e.parcelRequire3427;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in t){var s=t[e];delete t[e];var l={id:e,exports:{}};return i[e]=l,s.call(l.exports,l,l.exports),l.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,i){t[e]=i},e.parcelRequire3427=s),s("iE7OH").register(JSON.parse('{"jMc91":"shoping_list.b9fce800.js","4BzQQ":"symbol-defs.1b980632.svg","1idPu":"emptySmall.08a2b864.png","6hZEU":"emptyLarge@2x.c88e1f7f.png","6wc1A":"main.d20c907e.js"}'));var l=s("2XllU"),a=s("gzmIx"),o={};o=s("aNJCr").getBundleURL("jMc91")+s("iE7OH").resolve("4BzQQ");let n="bookList",r=document.querySelector(".books-shoppingList");var p={};p=s("aNJCr").getBundleURL("jMc91")+s("iE7OH").resolve("6hZEU");let c=new URL(p);var g={};g=s("aNJCr").getBundleURL("jMc91")+s("iE7OH").resolve("1idPu");let d=new URL(g);async function h(){let e=localStorage.getItem(n),i=JSON.parse(e);i&&i.length>0?await f():r.innerHTML=u}let u=`<li class="shoppingList-empty-item"><p class="shoppingList-text">
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
</a></li>`,f=async()=>{let e=localStorage.getItem(n),i=JSON.parse(e),t=[];for(let e=0;e<i.length;e++){let s=await (0,a.default)(i[e]);t.push(s)}!function(e){let i=Array.isArray(e)?e:[e],t="";for(let e of i){var s;t+=`<li class="shoppingList-item ">
        <img class="shoppingList-img" src=${e.book_image} alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">${e.title}</h2>
              <p class="shoppingList-category">${e.list_name}</p>
            </div>
            <button class="shoppingList-trash-btn" id=${e._id}>
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
          </li>`}r.innerHTML=t}(t);let s=document.querySelectorAll(".shoppingList-trash-btn");s.forEach(e=>{e.addEventListener("click",e=>{let i=JSON.parse(localStorage.getItem(n)),t=e.target.id,s=i.filter(e=>t!==e);localStorage.setItem("bookList",JSON.stringify(s)),h()})})};(0,l.default)(async()=>{await h()})}();
//# sourceMappingURL=shoping_list.b9fce800.js.map
