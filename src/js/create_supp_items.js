import { supportList } from './supp_list.js';

const suppCases = document.querySelector('.support-list');

export function suppMarkup() {
  let markup = '';
  let num = 0;

  supportList.forEach(caseItem => {
    const { title: sTitle, url: sUrl, img: sImg } = caseItem;

    num += 1;

    const itemMarkup = `
      <li class="support_item">
        <a class="support_a" href="${sUrl}"><span>0${num}</span>
          <img class="sup-img" src="${sImg}" alt="${sTitle}" alt='support'>
        </a>
      </li>`;

    markup += itemMarkup;
  });

  suppCases.insertAdjacentHTML('beforeend', markup);
}

export { suppCases };
