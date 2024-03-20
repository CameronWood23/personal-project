/// <reference types="react-scripts" />
import { isEqual } from "lodash"
import React from "react"
import { ReactComponent as ShoppingIcon } from "../../../assets/ShoppingBagLogo.svg"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { updateCart } from "../../../redux/slices/cartSlice"
import { CartIconContainer, ItemCount } from "./cartIcon.styles"

const CartIcon: React.FC = () => {
  const { isCartOpen, cartItems } = useAppSelector(
    (state) => state.cart,
    isEqual,
  )
  const dispatch = useAppDispatch()

  const toggleCart = () =>
    dispatch(
      updateCart({
        isCartOpen: !isCartOpen,
      }),
    )

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
