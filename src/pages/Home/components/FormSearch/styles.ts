import styled from "styled-components"

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

export const InputSearch = styled.form`
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
