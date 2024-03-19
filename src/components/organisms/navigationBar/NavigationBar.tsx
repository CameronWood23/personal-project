import React, { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import { ReactComponent as Logo } from "../../../assets/BitbucketLogo.svg"
import { CartContext } from "../../../context/cartContext"
import { UserContext } from "../../../context/userContext"
import { signOutUser } from "../../../utils/firebase/FirebaseUtils"
import CartIcon from "../../atoms/cartIcon/CartIcon"
import { CartDropdown } from "../../molecules"

import {
  CenteredLinks,
  LogoContainer,
  NavLinks,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles"

const NavigationBar: React.FC = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  const handleSignOut = () => {
    signOutUser()
  }

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
              <span onClick={handleSignOut}>SIGN OUT</span>
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
