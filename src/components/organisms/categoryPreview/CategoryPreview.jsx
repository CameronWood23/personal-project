import { useContext, Fragment } from "react"
import { CategoriesContext } from "../../../context/categoryContext"
import CategoryRow from "../../organisms/categoryRow/CategoryRow"

const CategoryPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryRow key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoryPreview
