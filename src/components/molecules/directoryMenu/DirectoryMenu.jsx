import DirectoryItem from "../directoryItem/DirectoryItem"
import "./directory-menu.styles.scss"

const DirectoryMenu = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default DirectoryMenu
