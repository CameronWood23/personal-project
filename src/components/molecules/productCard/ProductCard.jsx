import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"
import Button, { BUTTON_TYPE_CLASSES } from "../../atoms/button/Button"
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./productCard.styles.jsx"

const ProductCard = ({ product }) => {
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
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard
