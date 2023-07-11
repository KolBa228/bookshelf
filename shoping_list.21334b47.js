function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=e.parcelRequire3427;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},e.parcelRequire3427=o),o.register("kyEFX",function(e,i){"use strict";t(e.exports,"register",function(){return n},function(t){return n=t}),t(e.exports,"resolve",function(){return o},function(t){return o=t});var n,o,s={};n=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)s[e[i]]=t[e[i]]},o=function(t){var e=s[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),o("kyEFX").register(JSON.parse('{"1ZKY9":"shoping_list.21334b47.js","1Hmcw":"emptyLarge@2x.c88e1f7f.png","ftxxE":"emptySmall.08a2b864.png","hgD0X":"main.db876531.js"}'));var s=o("acDEV"),r=o("7PgTX");const l="bookList",a=document.querySelector(".books-shoppingList");var p={};p=new URL(o("kyEFX").resolve("1Hmcw"),import.meta.url).toString();let c=new URL(p);var g={};g=new URL(o("kyEFX").resolve("ftxxE"),import.meta.url).toString();let u=new URL(g);async function d(){let t=localStorage.getItem(l),e=JSON.parse(t);e&&e.length>0?await b():a.innerHTML=f}const f=`<li><p class="shoppingList-text">
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
</a></li>`,b=async()=>{let t=localStorage.getItem(l),e=JSON.parse(t),i=[];for(let t=0;t<e.length;t++){let n=await (0,r.default)(e[t]);i.push(n)}!function(t){let e=Array.isArray(t)?t:[t],i="";for(let t of e)i+=`<li class="shoppingList-item">
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
          </li>`;a.innerHTML=i}(i);let n=document.querySelectorAll(".shoppingList-trash-btn");n.forEach(t=>{t.addEventListener("click",t=>{let e=JSON.parse(localStorage.getItem(l)),i=t.target.id,n=e.filter(t=>i!==t);localStorage.setItem("bookList",JSON.stringify(n)),d()})})};(0,s.default)(async()=>{await d()});
//# sourceMappingURL=shoping_list.21334b47.js.map
