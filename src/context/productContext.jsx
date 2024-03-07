import { createContext, useState } from "react"

import SHOP_DATA from "../data/shop-data.js"

export const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([])
  const value = { product }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
