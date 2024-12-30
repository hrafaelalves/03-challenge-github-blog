import ReactMarkdown from 'react-markdown';
import { MarkdownContainer } from './styles';

interface MarkdownRendererProps {
  content: string;
}

export const PostContentRender = ({ content }: MarkdownRendererProps) => {
  return (
    <MarkdownContainer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkdownContainer>
  )
}

