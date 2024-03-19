import React, { useContext } from "react"
import { CartContext } from "../../../context/cartContext"
import { Button } from "../../atoms"
import { Footer, Name, Price, ProductCartContainer } from "./productCard.styles"

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard
