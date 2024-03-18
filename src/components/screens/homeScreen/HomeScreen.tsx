import React from "react"
import { Outlet } from "react-router-dom"
import DirectoryMenu from "../../molecules/directoryMenu/DirectoryMenu"

const HomeScreen: React.FC = () => {
  return (
    <div>
      <DirectoryMenu />
      <Outlet />
    </div>
  )
}

export default HomeScreen
