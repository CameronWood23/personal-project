import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { signOutUser } from "../../../utils/firebase/FirebaseUtils"
import { ReactComponent as Logo } from "../../../assets/BitbucketLogo.svg"

import "./navigation-bar.styles.scss"

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

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
              <span className="nav-link" onClick={signOutHandler}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar
