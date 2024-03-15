import { Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { CartContext } from "../../../context/cartContext"
import { signOutUser } from "../../../utils/firebase/FirebaseUtils"
import { ReactComponent as Logo } from "../../../assets/BitbucketLogo.svg"
import CartIcon from "../../atoms/cartIcon/CartIcon"
import CartDropdown from "../../molecules/cartDropdown/CartDropdown"

import {
  CenteredLinks,
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLinksContainer,
} from "./navigation.styles"

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <CenteredLinks>
            <NavLinks to="/shop">SHOP</NavLinks>
            {currentUser ? (
              <NavLinks as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLinks>
            ) : (
              <NavLinks to="/auth">SIGN IN</NavLinks>
            )}
            <CartIcon />
          </CenteredLinks>
          {isCartOpen && <CartDropdown />}
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar
