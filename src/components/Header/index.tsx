import { CoverImg, HeaderContainer, Logo } from "./styles"

import logo from "../../assets/logo.svg"
import cover from "../../assets/cover.jpg"

export const Header = () => {
  return (
    <HeaderContainer>
      <CoverImg src={cover} alt="" />

      <Logo src={logo} alt="" />
    </HeaderContainer>
  )
}
