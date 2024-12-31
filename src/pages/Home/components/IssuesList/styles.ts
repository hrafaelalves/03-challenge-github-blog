import styled from "styled-components";

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
