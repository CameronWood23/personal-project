import { useContext } from "react"
import ProductCard from "../../molecules/productCard/ProductCard"
import { ProductContext } from "../../../context/productContext"
import "./shop-screen.styles.scss"

const ShopScreen = () => {
  const { product } = useContext(ProductContext)

  return (
    <div className="products-container">
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ShopScreen
