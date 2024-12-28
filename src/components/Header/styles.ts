import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 296px;
  background: ${props => props.theme.profile};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const Logo = styled.img`
  z-index: 1;
`

export const CoverImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`
