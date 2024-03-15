import { useContext, useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../molecules/productCard/ProductCard"
import { CategoriesContext } from "../../../context/categoryContext"
import { CategoryContainer, TitleText } from "./category.styles"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <TitleText>{category.toUpperCase()}</TitleText>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category
