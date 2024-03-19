import React from "react"
import { Route, Routes } from "react-router-dom"
import Category from "../../components/organisms/category/Category"
import CategoryPreview from "../../components/organisms/categoryPreview/CategoryPreview"

const ShopPage: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default ShopPage
