import React, { useContext } from "react"
// import { ReactComponent as ShoppingIcon } from "../../../assets/ShoppingBagLogo.svg"
import { CartContext } from "../../../context/cartContext"
import { CartIconContainer, ItemCount } from "./cartIcon.styles"

const CartIcon: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      {/* <ShoppingIcon className="shopping-icon" /> */}
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
