import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../redux/hooks"
import { Button } from "../../atoms"
import CartItem from "../cartItem"
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cartDropdown.styles"

const CartDropdown: React.FC = () => {
  const { cartItems } = useAppSelector((state) => state.cart)

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
