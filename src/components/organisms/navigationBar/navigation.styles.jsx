import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavigationContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70%;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLinks = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

export const CenteredLinks = styled.div`
  display: flex;
  align-items: center;
`
