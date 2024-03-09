import { Routes, Route } from "react-router-dom"
import CategoryPreview from "../../organisms/categoryPreview/CategoryPreview"

import "./shop-screen.styles.scss"

const ShopScreen = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
    </Routes>
  )
}

export default ShopScreen
