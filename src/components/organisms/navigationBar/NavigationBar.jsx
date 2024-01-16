import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as Logo } from "../../../assets/BitbucketLogo.svg"
import "./navigation-bar.styles.scss"

const NavigationBar = () => {
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
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar
