import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"
import Button from "../../atoms/button/Button"
import CartItem from "../../molecules/cartItem/CartItem"

import "./cart-dropdown.styles.scss"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
