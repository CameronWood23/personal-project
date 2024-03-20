import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import React, { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { updateCart } from "../../../redux/slices/cartSlice"
import { signOutUser } from "../../../utils/firebase/FirebaseUtils"
import { CartDropdown, LanguageDrawer } from "../../molecules"

const NavigationBar = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser)
  const { isCartOpen } = useAppSelector((state) => state.cart)

  const [tabValue, setTabValue] = useState()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSignIn = () => {
    navigate("/auth")
  }

  const handleSignOut = () => {
    signOutUser()
    alert("Sign Out Successful!")
  }

  const toggleCart = () =>
    dispatch(
      updateCart({
        isCartOpen: !isCartOpen,
      }),
    )

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <ShoppingCartIcon />
          {isMatch ? (
            <>
              <LanguageDrawer />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={tabValue}
                indicatorColor="secondary"
                onChange={(e, value) => setTabValue(value)}
                sx={{ marginRight: "auto" }}
              >
                <Tab label="Hats" />
                <Tab label="Jackets" />
                <Tab label="Sneakers" />
                <Tab label="Mens" />
                <Tab label="Womens" />
              </Tabs>
              {currentUser ? (
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              ) : (
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  onClick={handleSignIn}
                >
                  Sign in
                </Button>
              )}
              <Button
                sx={{ marginLeft: "15px" }}
                variant="contained"
                onClick={toggleCart}
              >
                Checkout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </React.Fragment>
  )
}

export default NavigationBar
