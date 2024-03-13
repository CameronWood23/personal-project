import { Routes, Route } from "react-router-dom"
import CategoryPreview from "../../organisms/categoryPreview/CategoryPreview"
import Category from "../../organisms/category/Category"

import "./shop-screen.styles.scss"

const ShopScreen = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default ShopScreen
