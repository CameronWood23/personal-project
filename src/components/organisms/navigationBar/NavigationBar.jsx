import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { CartContext } from "../../../context/cartContext"
import { signOutUser } from "../../../utils/firebase/FirebaseUtils"
import { ReactComponent as Logo } from "../../../assets/BitbucketLogo.svg"
import CartIcon from "../../atoms/cartIcon/CartIcon"
import CartDropdown from "../../molecules/cartDropdown/CartDropdown"

import "./navigation-bar.styles.scss"

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <div className="centered-links">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar
