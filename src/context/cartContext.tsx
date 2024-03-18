import React, { ReactNode, createContext, useEffect, useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface CartContextType {
  isCartOpen: boolean
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
  cartItems: Product[]
  addItemToCart: (productToAdd: Product) => void
  removeItemFromCart: (cartItemToRemove: Product) => void
  clearItemFromCart: (cartItemToClear: Product) => void
  cartCount: number
  cartTotal: number
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [cartCount, setCartCount] = useState<number>(0)
  const [cartTotal, setCartTotal] = useState<number>(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0,
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (cartItemToRemove: Product) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear: Product) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  const value: CartContextType = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const addCartItem = (
  cartItems: Product[],
  productToAdd: Product,
): Product[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (
  cartItems: Product[],
  cartItemToRemove: Product,
): Product[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  )
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
}

const clearCartItem = (
  cartItems: Product[],
  cartItemToClear: Product,
): Product[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
