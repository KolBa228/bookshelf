function t(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},o=e.parcelRequire3427;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){s[t]=e},e.parcelRequire3427=o),o.register("kyEFX",function(e,i){"use strict";t(e.exports,"register",function(){return s},function(t){return s=t}),t(e.exports,"resolve",function(){return o},function(t){return o=t});var s,o,n={};s=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)n[e[i]]=t[e[i]]},o=function(t){var e=n[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),o("kyEFX").register(JSON.parse('{"1ZKY9":"shoping_list.f78d0c90.js","1Hmcw":"emptyLarge@2x.c88e1f7f.png","ftxxE":"emptySmall.08a2b864.png","hgD0X":"main.db876531.js"}'));var n=o("acDEV"),r=o("7PgTX");const l="bookList",a=document.querySelector(".books-shoppingList");var p={};p=new URL(o("kyEFX").resolve("1Hmcw"),import.meta.url).toString();let c=new URL(p);var g={};g=new URL(o("kyEFX").resolve("ftxxE"),import.meta.url).toString();let u=new URL(g);async function h(){let t=localStorage.getItem(l),e=JSON.parse(t);e&&e.length>0?await f():a.innerHTML=d}const d=`<li><p class="shoppingList-text">
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
</a></li>`,f=async()=>{let t=localStorage.getItem(l),e=JSON.parse(t),i=[];for(let t=0;t<e.length;t++){let s=await (0,r.default)(e[t]);i.push(s)}!function(t){let e=Array.isArray(t)?t:[t],i="";for(let t of e)i+=`<li class="shoppingList-item">
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
          </li>`;a.innerHTML=i}(i);let s=document.querySelectorAll(".shoppingList-trash-btn");s.forEach(t=>{t.addEventListener("click",t=>{let e=JSON.parse(localStorage.getItem(l)),i=t.target.id,s=e.filter(t=>i!==t);localStorage.setItem("bookList",JSON.stringify(s)),h()})})};(0,n.default)(async()=>{await h()});
//# sourceMappingURL=shoping_list.f78d0c90.js.map
