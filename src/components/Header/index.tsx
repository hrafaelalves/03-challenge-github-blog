import { CoverImg, HeaderContainer, Logo } from "./styles"

import logo from "../../assets/logo.svg"
import cover from "../../assets/cover.jpg"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <HeaderContainer>
      <CoverImg src={cover} alt="" />

      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>
    </HeaderContainer>
  )
}
