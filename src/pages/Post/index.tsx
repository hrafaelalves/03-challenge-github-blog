import { Link, useParams } from 'react-router-dom';
import { DefaultContainer } from '../../styles/global';
import { PostContent, PostDetails, SocialLinks } from './styles';
import { Github } from '../../components/Icons/Github';
import { Building2, ChevronLeft, Users } from 'lucide-react';
import { PostContentRender } from './components/PostContentRender';

const sampleContent = `
Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
\`\`\`javascript
let foo = 42;   // foo is now a number
foo = 'bar';    // foo is now a string
foo = true;     // foo is now a boolean
\`\`\`
`;

export const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);

  return (
    <DefaultContainer>
      <PostDetails>
        <header>
          <Link to="/"> <ChevronLeft /> Voltar</Link>
          <Link to="/">Ver no github <Github /></Link>
        </header>

        <h1>JavaScript data types and data structures</h1>

        <SocialLinks>
          <a href="http://"><Github />hrafaelalves</a>
          <a href="http://"><Building2 /> Ab Inbev</a>
          <a href="http://"><Users /> 8 seguidores</a>
        </SocialLinks>
      </PostDetails>

      <PostContent>
        <PostContentRender content={sampleContent} />
      </PostContent>
    </DefaultContainer>
  )
}
