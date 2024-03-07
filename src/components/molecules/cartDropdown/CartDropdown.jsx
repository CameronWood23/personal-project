import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../../context/cartContext"
import Button from "../../atoms/button/Button"
import CartItem from "../../molecules/cartItem/CartItem"

import "./cart-dropdown.styles.scss"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate("/checkout")
  }

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
      <Button onClick={handleCheckout}>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
