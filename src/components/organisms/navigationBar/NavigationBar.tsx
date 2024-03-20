/// <reference types="react-scripts" />
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
import CooperIcon from "../../../assets/Cooper.png"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { updateCart } from "../../../redux/slices/cartSlice"
import { signOutUser } from "../../../utils/firebase/FirebaseUtils"
import { CartDropdown, LanguageDrawer } from "../../molecules"

const NavigationBar = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser)
  const { isCartOpen } = useAppSelector((state) => state.cart)

  const [tabValue, setTabValue] = useState(Number)
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const navigateToHome = () => {
    navigate("/")
  }

  const handleSignIn = () => {
    navigate("/auth")
    setTabValue(0)
    dispatch(
      updateCart({
        isCartOpen: false,
      }),
    )
  }

  const handleSignOut = () => {
    signOutUser()
    alert("Sign Out Successful!")
    setTabValue(0)
  }

  const handleTabChange = (event: any, newValue: any) => {
    navigate(`/shop/${newValue.toLowerCase()}`)
    setTabValue(newValue)
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
          <img
            src={CooperIcon}
            alt="Cooper Icon"
            style={{ height: "80px", marginRight: "20px" }}
            onClick={navigateToHome}
          />

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
                onChange={handleTabChange}
                sx={{ marginRight: "auto" }}
              >
                <Tab label="Hats" value="Hats" />
                <Tab label="Jackets" value="Jackets" />
                <Tab label="Sneakers" value="Sneakers" />
                <Tab label="Mens" value="Mens" />
                <Tab label="Womens" value="Womens" />
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
