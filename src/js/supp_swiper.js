// function scrollList() {
//     const spList = document.getElementById("support-list");
//     const firstItem = spList.firstElementChild;
//     firstItem.classList.add("hidden");
//     spList.removeChild(firstItem);
//     spList.appendChild(firstItem);
//     setTimeout(() => {
//         firstItem.classList.remove("hidden");
//     }, 0);
// }

// function scrollList() {
//     const spList = document.getElementById("support-list");
//     const firstItem = spList.firstElementChild;
//     firstItem.classList.add("hidden");
//     spList.removeChild(firstItem);
//     setTimeout(() => {
//         spList.appendChild(firstItem);
//         firstItem.classList.remove("hidden");
//     }, 300);
// }

const button2 = document.getElementById('button');
if (button2) {
  button2.addEventListener('click', scrollList);
}
function scrollList() {
  const list = document.getElementById('support-list');
  const firstItem = list.firstElementChild;
  const isWorldVision = firstItem.alt === 'World vision';

  firstItem.classList.add('hidden');
  list.removeChild(firstItem);

  setTimeout(() => {
    if (isWorldVision) {
      list.insertBefore(firstItem, list.firstChild);
    } else {
      list.appendChild(firstItem);
    }
    firstItem.classList.remove('hidden');
  }, 300);
}
