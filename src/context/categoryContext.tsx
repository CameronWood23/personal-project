import React, { ReactNode, createContext, useEffect, useState } from "react"
import { getCategoriesAndDocuments } from "../utils/firebase/FirebaseUtils"

interface CategoryMap {
  [key: string]: any
}

interface ContextProps {
  categoriesMap: CategoryMap
}

export const CategoriesContext = createContext<ContextProps>({
  categoriesMap: {},
})

interface ProviderProps {
  children: ReactNode
}

export const CategoriesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoryMap>({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap: CategoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  const value: ContextProps = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
