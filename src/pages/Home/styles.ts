import styled from "styled-components";

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

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  a{
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
    }
  }
`

export const PublicationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1rem;

  > span{
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.span};
  }

  > h3{
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.subtitle};
  }
`

export const FormSearch = styled.form`
  input{
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.input};
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};

    font-size: 1rem;
    line-height: 1.6rem;

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    transition: all 0.2s;

    &::placeholder{
      color: ${({ theme }) => theme.label};
      font-size: 1rem;
      line-height: 1.6rem;
      font-weight: 400;
    }

    &:focus{
      border: 1px solid ${({ theme }) => theme.blue};
      outline: none;
    }
  }
`

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  margin-top: 2rem;

  h2{
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.title};
    margin-bottom: 0.5rem;
  }

  time{
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.span};
  }
`
