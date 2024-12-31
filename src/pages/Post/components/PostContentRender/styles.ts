import styled from "styled-components";

export const MarkdownContainer = styled.div`
  line-height: 1.6;
  font-size: 1rem;

  code {
    border-radius: 10px;
    width: 100%;
  }

  pre {
    margin-top: 1rem;
    border-radius: 10px;
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  h3{
    font-size: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.blue};
    font-weight: 400;
  }
`;
