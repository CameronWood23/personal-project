import React, { Fragment, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { fetchCategories } from "../../../redux/slices/categorySlice"
import CategoryRow from "../categoryRow"

const CategoryPreview: React.FC = () => {
  const dispatch = useAppDispatch()

  const categoriesMap = useAppSelector((state) => state.category.categoriesMap)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title: string) => {
        const products = categoriesMap[title] as any[]
        return <CategoryRow key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoryPreview
