import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface CartState {
  isCartOpen: boolean
  cartItems: Product[]
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload
    },
    addItemToCart(state, action: PayloadAction<Product>) {
      const productToAdd = action.payload
      const existingCartItem = state.cartItems.find(
        (item) => item.id === productToAdd.id,
      )
      if (existingCartItem) {
        existingCartItem.quantity++
      } else {
        state.cartItems.push({ ...productToAdd, quantity: 1 })
      }
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const productIdToRemove = action.payload
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== productIdToRemove,
      )
    },
    clearItemFromCart(state, action: PayloadAction<string>) {
      const productIdToClear = action.payload
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== productIdToClear,
      )
    },
    updateCart: (state, action: PayloadAction<Partial<CartState>>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  updateCart,
} = cartSlice.actions

export default cartSlice.reducer
