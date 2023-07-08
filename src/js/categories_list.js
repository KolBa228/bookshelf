import { categoriesList } from "./querrySelectors"
import getCategoryList from "./service/getCategoryList"
const fillCategories = async() => {
    const categories = await getCategoryList()
console.log(categories)
const tempHTML = categories.map(category =>{
    return( `
    <li class="categories_list_item">
      <a class="categories_link" href="/categories?category=${category.list_name}">
      ${category.list_name}
      </a>
    </li>`)
})
categoriesList.innerHTML = tempHTML.join(' ');
}
export default fillCategories

