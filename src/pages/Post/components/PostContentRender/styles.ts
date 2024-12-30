import styled from "styled-components";

export const MarkdownContainer = styled.div`
  line-height: 1.6;
  font-size: 1rem;

  code {
    display: flex;

    border-radius: 10px;
    padding: 1rem;

    width: 100%;
    background-color: ${({ theme }) => theme.post};
    border-radius: 4px;
  }
`;
