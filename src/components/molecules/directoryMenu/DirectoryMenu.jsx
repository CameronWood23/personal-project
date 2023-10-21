import CategoryItem from "../categoryItem/CategoryItem"
import "./directory-menu.styles.scss"

const DirectoryMenu = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default DirectoryMenu
