import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MarkdownContainer } from './styles';

interface MarkdownRendererProps {
  content: string;
}

export const PostContentRender = ({ content }: MarkdownRendererProps) => {
  return (
    <MarkdownContainer>
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }: { inline: boolean, className: string, children: React.ReactNode }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={coldarkDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};
