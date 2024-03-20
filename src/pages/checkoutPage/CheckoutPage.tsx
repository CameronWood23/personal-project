import { isEqual } from "lodash"
import React from "react"
import { CheckoutItem } from "../../components/molecules"
import { useAppSelector } from "../../redux/hooks"
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkoutPage.styles"

const CheckoutPage: React.FC = () => {
  const { cartItems } = useAppSelector((state) => state.cart, isEqual)

  const total = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0,
  )

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
      <Total>TOTAL: ${total}</Total>
    </CheckoutContainer>
  )
}

export default CheckoutPage
