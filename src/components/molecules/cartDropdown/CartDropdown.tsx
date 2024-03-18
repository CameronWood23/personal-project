import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../../context/cartContext"
import Button from "../../atoms/button/Button"
import CartItem from "../cartItem/CartItem"
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cartDropdown.styles"

const CartDropdown: React.FC = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
