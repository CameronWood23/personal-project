import React, { useContext } from "react"
import { CartContext } from "../../../context/cartContext"

import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkoutItem.styles"

interface CartItem {
  id: string
  name: string
  imageUrl: string
  price: number
  quantity: number
}

interface Props {
  cartItem: CartItem
}

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
