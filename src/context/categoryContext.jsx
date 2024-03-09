import { createContext, useState, useEffect } from "react"
import { getCategoriesAndDocuments } from "../utils/firebase/FirebaseUtils"

export const CategoriesContext = createContext({
  categories: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({})
  useEffect(
    () => async () => {
      const categoryMap = await getCategoriesAndDocuments("categories")
      setCategories(categoryMap)
    },
    [],
  )

  const value = { categories }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
