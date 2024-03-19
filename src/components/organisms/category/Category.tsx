import React, { Fragment, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../../context/categoryContext"
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
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (category && categoriesMap[category]) {
      setProducts(categoriesMap[category])
    } else {
      setProducts([])
    }
  }, [category, categoriesMap])

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
