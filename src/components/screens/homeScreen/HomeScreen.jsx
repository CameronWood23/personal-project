import { Outlet } from "react-router-dom"
import DirectoryMenu from "../../molecules/directoryMenu/DirectoryMenu"

const HomeScreen = () => {
  return (
    <div>
      <DirectoryMenu />
      <Outlet />
    </div>
  )
}

export default HomeScreen
