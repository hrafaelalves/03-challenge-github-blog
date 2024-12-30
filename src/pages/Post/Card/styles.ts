import styled from "styled-components";

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.post};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 1rem;

    h2{
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.title};
    }

    time{
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.span};
      white-space: nowrap;
    }
  }

  p{
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-top: 1rem;
  }
`
