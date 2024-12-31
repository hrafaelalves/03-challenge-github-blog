import styled from "styled-components"

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-bottom: 4.5rem;

  margin-top: -5rem;
  z-index: 10;
  position: relative;

  > img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.title};
    margin-bottom: 0.5rem;
  }

  a{
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    font-size: 0.75rem;
    line-height: 1.6rem;
    text-transform: uppercase;

    svg {
      width: 12px;
      height: 12px;
      line-height: 0;
    }
  }
`

export const ProfileDescription = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;
  margin: 0.5rem 0 1.5rem;
`

export const GithubDetails = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  li{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.subtitle};
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.6rem;

    svg{
      width: 18px;
      height: 18px;
      color: ${({ theme }) => theme.label};
      line-height: 0;
    }
  }
`
