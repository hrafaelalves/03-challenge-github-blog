import styled from "styled-components";
import { GithubSvg } from "../../components/Icons/Github";

export const PostDetails = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-bottom: 2.5rem;
  margin-top: -5rem;

  z-index: 10;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;

    a{
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.blue};
      font-size: 0.75rem;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;

      ${GithubSvg}{
        fill: ${({ theme }) => theme.blue};
      }
    }
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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

export const PostContent = styled.div``
