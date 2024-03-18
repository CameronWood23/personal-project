import React, { Fragment, useContext } from "react"
import { CategoriesContext } from "../../../context/categoryContext"
import CategoryRow from "../categoryRow/CategoryRow"

const CategoryPreview: React.FC = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title: string) => {
        const products = categoriesMap[title] as any[] // Adjust 'any' based on the actual type of products
        return <CategoryRow key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoryPreview
