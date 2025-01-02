import styled from "styled-components";

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.post};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  min-height: 200px;

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

      a{
        color: ${({ theme }) => theme.title};
        text-decoration: none;

        &:hover{
          text-decoration: underline;
        }
      }
    }

    time{
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.span};
      white-space: nowrap;
    }
  }
`

export const Content = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;
  margin-top: 1rem;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
