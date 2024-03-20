import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { ReactComponent as Logo } from "../../../assets/BitbucketLogo.svg"
import { useAppSelector } from "../../../redux/hooks" // Import useSelector and useDispatch hooks
import { signOutUser } from "../../../utils/firebase/FirebaseUtils"
import { CartIcon } from "../../atoms"
import { CartDropdown } from "../../molecules"
import {
  CenteredLinks,
  LogoContainer,
  NavLinks,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles"

const NavigationBar: React.FC = () => {
  const { isCartOpen } = useAppSelector((state) => state.cart)
  const currentUser = useAppSelector((state) => state.user.currentUser)

  const handleSignOut = () => {
    signOutUser()
  }
  console.log(currentUser)

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
