import React, { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { fetchCategories } from "../../../redux/slices/categorySlice"
import { ProductCard } from "../../molecules"
import { CategoryContainer, TitleText } from "./category.styles"

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>()
  const [products, setProducts] = useState<Product[]>([])

  const dispatch = useAppDispatch()
  const categoriesMap = useAppSelector((state) => state.category.categoriesMap)

  useEffect(() => {
    if (category && categoriesMap[category]) {
      setProducts(categoriesMap[category])
    } else {
      setProducts([])
      dispatch(fetchCategories())
    }
  }, [category, categoriesMap, dispatch])

  return (
    <Fragment>
      <TitleText>{category ? category.toUpperCase() : ""}</TitleText>
      <CategoryContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category
