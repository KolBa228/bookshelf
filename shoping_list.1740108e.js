!function(){function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=e.parcelRequire3427;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return i[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},e.parcelRequire3427=r),r.register("iE7OH",function(e,i){"use strict";t(e.exports,"register",function(){return n},function(t){return n=t}),t(e.exports,"resolve",function(){return r},function(t){return r=t});var n,r,o={};n=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)o[e[i]]=t[e[i]]},r=function(t){var e=o[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),r.register("aNJCr",function(e,i){t(e.exports,"getBundleURL",function(){return n},function(t){return n=t});"use strict";var n,r={};n=function(t){var e=r[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[t]=e),e}}),r("iE7OH").register(JSON.parse('{"jMc91":"shoping_list.1740108e.js","1idPu":"emptySmall.08a2b864.png","6hZEU":"emptyLarge@2x.c88e1f7f.png","gSU6P":"main.3375f952.js"}'));var o=r("2XllU"),s=r("gzmIx");let a="bookList",l=document.querySelector(".books-shoppingList");var c={};c=r("aNJCr").getBundleURL("jMc91")+r("iE7OH").resolve("6hZEU");let p=new URL(c);var u={};u=r("aNJCr").getBundleURL("jMc91")+r("iE7OH").resolve("1idPu");let g=new URL(u);async function f(){let t=localStorage.getItem(a),e=JSON.parse(t);e&&e.length>0?await h():l.innerHTML=d}let d=`<li><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${p} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${g}"
    alt="Book"
  />
</picture>
</a></li>`,h=async()=>{let t=localStorage.getItem(a),e=JSON.parse(t),i=[];for(let t=0;t<e.length;t++){let n=await (0,s.default)(e[t]);i.push(n)}!function(t){let e=Array.isArray(t)?t:[t],i="";for(let t of e)i+=`<li class="shoppingList-item">
        <img class="shoppingList-img" src=${t.book_image} alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">${t.title}</h2>
              <p class="shoppingList-category">${t.list_name}</p>
            </div>
            <button class="shoppingList-trash-btn" id=${t._id}>
              x
            </button>
            </button>
          </div>
          <p class="shoppingList-content">
          ${t.description}
          </p>
          <div class="shoppingList-link-container">
            <p class="text-shoppingList-author">${t.author}</p>
            <ul class='icon-book-modal-list shopping-list'>
            <li>
                <a href=${t.buy_links[0].url} target="_blank">
                <img src="https://i.ibb.co/vvPnCJ6/1-amazon.png" alt="amazon" class="image-link1">
                </a>
            </li>
            <li>
                <a href=${t.buy_links[1].url} target="_blank">
                <img src="https://i.ibb.co/nj6G7gJ/2-ibook.png" alt="ibook" class="image-link2">
                </a>
            </li>
            <li>
                <a href=${t.buy_links[4].url} target="_blank">
                <img src="https://i.ibb.co/fFPnVJN/3-bookshop.png" alt="bookshop" class="image-link2">
                </a>
            </li>
              </div>
            </div>
          </li>`;l.innerHTML=i}(i);let n=document.querySelectorAll(".shoppingList-trash-btn");n.forEach(t=>{t.addEventListener("click",t=>{let e=JSON.parse(localStorage.getItem(a)),i=t.target.id,n=e.filter(t=>i!==t);localStorage.setItem("bookList",JSON.stringify(n)),f()})})};(0,o.default)(async()=>{await f()})}();
//# sourceMappingURL=shoping_list.1740108e.js.map
