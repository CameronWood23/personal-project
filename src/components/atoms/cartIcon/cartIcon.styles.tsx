import styled from "styled-components"

// import { ReactComponent as ShoppingIcon } from "../../../assets/ShoppingBagLogo.svg"

// export const ShoppingIconStyle = styled(ShoppingIcon)`
//   width: 24px;
//   height: 24px;
// `

export const CartIconContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 5px;
`
