import React from "react"
import ProductCard from "../../molecules/productCard/ProductCard"
import {
  CategoryContainer,
  ProductPreview,
  TitleText,
} from "./categoryRow.styles"

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface CategoryRowProps {
  title: string
  products: Product[]
}

const CategoryRow: React.FC<CategoryRowProps> = ({ title, products }) => (
  <CategoryContainer>
    <h2>
      <TitleText to={title}>{title.toUpperCase()}</TitleText>
    </h2>
    <ProductPreview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ProductPreview>
  </CategoryContainer>
)

export default CategoryRow
