!function(){function t(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},n=e.parcelRequire3427;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},e.parcelRequire3427=n),n.register("iE7OH",function(e,i){"use strict";t(e.exports,"register",function(){return s},function(t){return s=t}),t(e.exports,"resolve",function(){return n},function(t){return n=t});var s,n,o={};s=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)o[e[i]]=t[e[i]]},n=function(t){var e=o[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),n.register("aNJCr",function(e,i){t(e.exports,"getBundleURL",function(){return s},function(t){return s=t});"use strict";var s,n={};s=function(t){var e=n[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[t]=e),e}}),n("iE7OH").register(JSON.parse('{"jMc91":"shoping_list.404a246e.js","1idPu":"emptySmall.08a2b864.png","6hZEU":"emptyLarge@2x.c88e1f7f.png","gSU6P":"main.3375f952.js"}'));var o=n("2XllU"),r=n("gzmIx");let l="bookList",a=document.querySelector(".books-shoppingList");var p={};p=n("aNJCr").getBundleURL("jMc91")+n("iE7OH").resolve("6hZEU");let c=new URL(p);var g={};g=n("aNJCr").getBundleURL("jMc91")+n("iE7OH").resolve("1idPu");let u=new URL(g);async function h(){let t=localStorage.getItem(l),e=JSON.parse(t);e&&e.length>0?await d():a.innerHTML=f}let f=`<li><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${c} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${u}"
    alt="Book"
  />
</picture>
</a></li>`,d=async()=>{let t=localStorage.getItem(l),e=JSON.parse(t),i=[];for(let t=0;t<e.length;t++){let s=await (0,r.default)(e[t]);i.push(s)}!function(t){let e=Array.isArray(t)?t:[t],i="";for(let t of e)i+=`<li class="shoppingList-item">
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
          </li>`;a.innerHTML=i}(i);let s=document.querySelectorAll(".shoppingList-trash-btn");s.forEach(t=>{t.addEventListener("click",t=>{let e=JSON.parse(localStorage.getItem(l)),i=t.target.id,s=e.filter(t=>i!==t);localStorage.setItem("bookList",JSON.stringify(s)),h()})})};(0,o.default)(async()=>{await h()})}();
//# sourceMappingURL=shoping_list.404a246e.js.map
