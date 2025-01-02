import { Link, useParams } from 'react-router-dom';
import { DefaultContainer } from '../../styles/global';
import { PostContent, PostDetails, SocialLinks } from './styles';
import { Github } from '../../components/Icons/Github';
import { Building2, ChevronLeft, MessageCircle } from 'lucide-react';
import { PostContentRender } from './components/PostContentRender';
import { useIssue } from '../../hooks/use-issues';
import { formatRelativeTime } from '../../utils/formatter';

export const Post = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useIssue(Number(id));
  console.log(data)

  return (
    <DefaultContainer>
      <PostDetails>
        <header>
          <Link to="/"> <ChevronLeft /> Voltar</Link>

          <a href='https://github.com/hrafaelalves/03-challenge-github-blog/issues/1' target="_blank" rel="noopener noreferrer">
            Ver no github <Github />
          </a>
        </header>

        <h1>{data?.title}</h1>

        <SocialLinks>
          <a href={`https://github.com/${data?.user.login}`} target="_blank" rel="noopener noreferrer">
            <Github /> {data?.user.login}
          </a>
          <a href="https://www.ab-inbev.com/" target="_blank" rel="noopener noreferrer">
            <Building2 /> {formatRelativeTime(data?.created_at || "")}
          </a>
          <a href="#">
            <MessageCircle /> {data?.comments} {data?.comments === 1 ? "comentário" : "comentários"}
          </a>
        </SocialLinks>
      </PostDetails>

      <PostContent>
        <PostContentRender content={data?.body || ""} />
      </PostContent>
    </DefaultContainer>
  )
}
