import React, { Fragment, useContext } from "react"
import { CategoriesContext } from "../../../context/categoryContext"
import CategoryRow from "../categoryRow/CategoryRow"

const CategoryPreview = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return <CategoryRow key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoryPreview
