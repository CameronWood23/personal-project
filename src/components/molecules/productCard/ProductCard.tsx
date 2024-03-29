import React from "react"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../../../redux/slices/cartSlice"
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

  const dispatch = useDispatch()
  const addProductHandler = () => dispatch(addItemToCart(product))

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductHandler}>
        Add to Cart
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard
