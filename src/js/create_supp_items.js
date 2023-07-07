import { supportList } from './supp_list.js'

const suppCases = document.querySelector('.support-list');

export function suppMarkup() {
    let markup = '';

    supportList.forEach(caseItem => {
    const { title: sTitle, url: sUrl, img: sImg } = caseItem;

    const itemMarkup = `
      <li class="support_item">
        <a class="support_a" href="${sUrl}">
          <img src="${sImg}" alt="${sTitle}">
        </a>
      </li>`;

    markup += itemMarkup;
});

suppCases.insertAdjacentHTML('beforeend', markup);

};


export { suppCases };
