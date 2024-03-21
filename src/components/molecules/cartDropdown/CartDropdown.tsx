import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../redux/hooks"
import { ButtonMUI } from "../../atoms"
import CartItem from "../cartItem"
import {
  ButtonContainer,
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
      <ButtonContainer>
        <ButtonMUI
          variant={"contained"}
          onClick={goToCheckoutHandler}
          buttonText={"Proceed to Checkout"}
        />
      </ButtonContainer>
    </CartDropdownContainer>
  )
}

export default CartDropdown
