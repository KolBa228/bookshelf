function t(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},n=e.parcelRequire3427;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},e.parcelRequire3427=n),n.register("kyEFX",function(e,i){"use strict";t(e.exports,"register",function(){return s},function(t){return s=t}),t(e.exports,"resolve",function(){return n},function(t){return n=t});var s,n,o={};s=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)o[e[i]]=t[e[i]]},n=function(t){var e=o[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),n.register("jKsn4",function(t,e){var i=n("acDEV"),s=n("7PgTX");let o="bookList",r=document.querySelector(".books-shoppingList"),l=new URL(n("imBh3")),a=new URL(n("7JFFJ"));async function p(){let t=localStorage.getItem(o),e=JSON.parse(t);e&&e.length>0?await g():r.innerHTML=c}let c=`<li><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
<picture>
  <source srcset="${l} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${a}"
    alt="Book"
  />
</picture>
</a></li>`,g=async()=>{let t=localStorage.getItem(o),e=JSON.parse(t),i=[];for(let t=0;t<e.length;t++){let n=await (0,s.default)(e[t]);i.push(n)}!function(t){let e=Array.isArray(t)?t:[t],i="";for(let t of e)i+=`<li class="shoppingList-item">
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
          </li>`;r.innerHTML=i}(i);let n=document.querySelectorAll(".shoppingList-trash-btn");n.forEach(t=>{t.addEventListener("click",t=>{let e=JSON.parse(localStorage.getItem(o)),i=t.target.id,s=e.filter(t=>i!==t);localStorage.setItem("bookList",JSON.stringify(s)),p()})})};(0,i.default)(async()=>{await p()})}),n.register("7PgTX",function(e,i){t(e.exports,"default",function(){return l});var s=n("kwJfa"),o=n("2wKSg");let r=async t=>{let e=await (0,o.fetchData)({path:`${s.apiConfig.getBookById}/${t}`,method:"GET"});return e};var l=r}),n.register("imBh3",function(t,e){t.exports=new URL(n("kyEFX").resolve("1Hmcw"),import.meta.url).toString()}),n.register("7JFFJ",function(t,e){t.exports=new URL(n("kyEFX").resolve("ftxxE"),import.meta.url).toString()}),n("kyEFX").register(JSON.parse('{"1ZKY9":"shoping_list.0bed79ee.js","1Hmcw":"emptyLarge@2x.c88e1f7f.png","ftxxE":"emptySmall.08a2b864.png","c6KBb":"main.00121b39.js"}')),n("jKsn4");
//# sourceMappingURL=shoping_list.0bed79ee.js.map
