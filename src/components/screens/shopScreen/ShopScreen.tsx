import React from "react"
import { Route, Routes } from "react-router-dom"
import Category from "../../organisms/category/Category"
import CategoryPreview from "../../organisms/categoryPreview/CategoryPreview"

const ShopScreen: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default ShopScreen
