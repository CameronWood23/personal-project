import React from "react"
import { Outlet } from "react-router-dom"
import { DirectoryMenu } from "../../components/molecules"

const HomeScreen: React.FC = () => {
  return (
    <div>
      <DirectoryMenu />
      <Outlet />
    </div>
  )
}

export default HomeScreen
