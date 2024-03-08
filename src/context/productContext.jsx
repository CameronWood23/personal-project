import { createContext, useState, useEffect } from "react"
import { getCategoriesAndDocuments } from "../utils/firebase/FirebaseUtils"

export const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([])
  useEffect(
    () => async () => {
      const categoryMap = await getCategoriesAndDocuments("categories")
      console.log(categoryMap)
    },
    [],
  )

  const value = { product }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
