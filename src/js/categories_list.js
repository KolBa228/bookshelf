import { categoriesList } from "./querrySelectors"
import getCategoryList from "./service/getCategoryList"
const fillCategories = async() => {
    const categories = await getCategoryList()
console.log(categories)
const buttonHTML = [
    `<li class="categories-list-item">
      <button class="categories-button all-categories-button" type="button">
      All categories
      </button>
    </li>`
]
const tempHTML = categories.map(category =>{
    return( `
    <li class="categories-list-item">
      <button class="categories-button" type="button">
      ${category.list_name}
      </button>
    </li>`)
})
categoriesList.innerHTML = tempHTML.join(' ');
}
export default fillCategories

