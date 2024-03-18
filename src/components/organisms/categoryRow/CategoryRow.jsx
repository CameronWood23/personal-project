import ProductCard from "../../molecules/productCard/ProductCard"

import {
  CategoryContainer,
  TitleText,
  ProductPreview,
} from "./categoryRow.styles"

const CategoryRow = ({ title, products }) => (
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
