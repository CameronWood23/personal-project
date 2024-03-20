import React from "react"
import { useDispatch } from "react-redux"
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../../redux/slices/cartSlice"

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
  const { id, name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()

  const clearItemHandler = () => dispatch(clearItemFromCart(id))
  const addItemHandler = () => dispatch(addItemToCart(cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(id))

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
