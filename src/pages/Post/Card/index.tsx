import { formatRelativeTime } from "../../../utils/formatter";
import { Content, PostCard } from "./styles"

interface CardProps {
  title: string;
  date: string;
  content: string;
}

export const Card = ({ title, date, content }: CardProps) => {
  const formatterDate = formatRelativeTime(date);

  return (
    <PostCard>
      <header>
        <h2>{title}</h2>
        <time>{formatterDate}</time>
      </header>

      <Content>
        {content}
      </Content>
    </PostCard>
  )
}
