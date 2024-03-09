import { useContext } from "react"
import CategoryRow from "../../organisms/categoryRow/CategoryRow"
import { CategoriesContext } from "../../../context/categoryContext"
import "./shop-screen.styles.scss"

const ShopScreen = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <div className="shop-container">
      {Object.keys(categories).map((key) => {
        const products = categories[key]
        return <CategoryRow key={key} title={key} products={products} />
      })}
    </div>
  )
}

export default ShopScreen
