import React, { useContext } from "react"
import { CartContext } from "../../../context/cartContext"
import CheckoutItem from "../../molecules/checkoutItem/CheckoutItem"
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkoutScreen.styles"

const CheckoutScreen: React.FC = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default CheckoutScreen
