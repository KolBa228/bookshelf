var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},s=t.parcelRequire3427;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in i){var s=i[t];delete i[t];var o={id:t,exports:{}};return e[t]=o,s.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},t.parcelRequire3427=s),s("kyEFX").register(JSON.parse('{"1ZKY9":"shoping_list.36c4963b.js","6RkRa":"symbol-defs.1b980632.svg","1Hmcw":"emptyLarge@2x.c88e1f7f.png","ftxxE":"emptySmall.08a2b864.png","8mQiY":"main.ffa3561d.js"}'));var o=s("acDEV"),a=s("7PgTX"),l={};l=new URL(s("kyEFX").resolve("6RkRa"),import.meta.url).toString();const n="bookList",r=document.querySelector(".books-shoppingList");var p={};p=new URL(s("kyEFX").resolve("1Hmcw"),import.meta.url).toString();let c=new URL(p);var g={};g=new URL(s("kyEFX").resolve("ftxxE"),import.meta.url).toString();let d=new URL(g);async function h(){let t=localStorage.getItem(n),e=JSON.parse(t);e&&e.length>0?await f():r.innerHTML=m}const m=`<li class="shoppingList-empty-item"><p class="shoppingList-text">
This page is empty, add some books and proceed to order.
</p>
<a href="/src/main.html">
<picture>
  <source srcset="${c} 2x" type="image/png" />
  <img
    class="shoppingList-img-empty"
    src="${d}"
    alt="Book"
  />
</picture>
</a></li>`,f=async()=>{let t=localStorage.getItem(n),e=JSON.parse(t),i=[];for(let t=0;t<e.length;t++){let s=await (0,a.default)(e[t]);i.push(s)}!function(t){let e=Array.isArray(t)?t:[t],i="";for(let t of e){var s;i+=`<li class="shoppingList-item ">
        <img class="shoppingList-img" src=${t.book_image} alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">${t.title}</h2>
              <p class="shoppingList-category">${t.list_name}</p>
            </div>
            <button class="shoppingList-trash-btn" id=${t._id} aria-label='delete-book'>
            <svg class='shoppingList-icon-trash'><use href='${(s=l)&&s.__esModule?s.default:s}#icon-trash'></use></svg>
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
          </li>`}r.innerHTML=i}(i);let s=document.querySelectorAll(".shoppingList-trash-btn");s.forEach(t=>{t.addEventListener("click",t=>{let e=JSON.parse(localStorage.getItem(n)),i=t.target.id,s=e.filter(t=>i!==t);localStorage.setItem("bookList",JSON.stringify(s)),h()})})};(0,o.default)(async()=>{await h()});
//# sourceMappingURL=shoping_list.36c4963b.js.map
