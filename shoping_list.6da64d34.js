!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},e={},s=t.parcelRequire3427;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in e){var s=e[t];delete e[t];var l={id:t,exports:{}};return i[t]=l,s.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,i){e[t]=i},t.parcelRequire3427=s),s("iE7OH").register(JSON.parse('{"jMc91":"shoping_list.6da64d34.js","1idPu":"emptySmall.08a2b864.png","6hZEU":"emptyLarge@2x.c88e1f7f.png","6wc1A":"main.d20c907e.js"}'));var l=s("2XllU"),o=s("gzmIx");let a="bookList",n=document.querySelector(".books-shoppingList");var r={};r=s("aNJCr").getBundleURL("jMc91")+s("iE7OH").resolve("6hZEU");let p=new URL(r);var c={};c=s("aNJCr").getBundleURL("jMc91")+s("iE7OH").resolve("1idPu");let g=new URL(c);async function d(){let t=localStorage.getItem(a),i=JSON.parse(t);i&&i.length>0?await u():n.innerHTML=h}let h=`<li><p class="shoppingList-text">
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
</a></li>`,u=async()=>{let t=localStorage.getItem(a),i=JSON.parse(t),e=[];for(let t=0;t<i.length;t++){let s=await (0,o.default)(i[t]);e.push(s)}!function(t){let i=Array.isArray(t)?t:[t],e="";for(let t of i)e+=`<li class="shoppingList-item">
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
          </li>`;n.innerHTML=e}(e);let s=document.querySelectorAll(".shoppingList-trash-btn");s.forEach(t=>{t.addEventListener("click",t=>{let i=JSON.parse(localStorage.getItem(a)),e=t.target.id,s=i.filter(t=>e!==t);localStorage.setItem("bookList",JSON.stringify(s)),d()})})};(0,l.default)(async()=>{await d()})}();
//# sourceMappingURL=shoping_list.6da64d34.js.map
