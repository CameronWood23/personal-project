import React from "react"
import { Route, Routes } from "react-router-dom"
import { Category, CategoryPreview } from "../../components/organisms"

const ShopPage: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default ShopPage
