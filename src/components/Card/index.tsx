import { Link } from "react-router-dom";
import { formatRelativeTime } from "../../utils/formatter";
import { Content, PostCard } from "./styles"

interface CardProps {
  number: number;
  title: string;
  date: string;
  content: string;
}

export const Card = ({ number, title, date, content }: CardProps) => {
  const formatterDate = formatRelativeTime(date);

  return (
    <PostCard>
      <header>
        <h2><Link to={`/post/${number}`}>{title}</Link></h2>
        <time>{formatterDate}</time>
      </header>

      <Content>
        {content}
      </Content>
    </PostCard>
  )
}
