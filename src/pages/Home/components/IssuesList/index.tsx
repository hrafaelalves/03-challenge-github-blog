
import { Card } from '../../../Post/Card'
import { ContentContainer } from './styles'

interface IssuesListProps {
  items: Array<{
    title: string;
    id: number;
    body: string;
    created_at: string;
    comments: number;
    user: {
      id: number;
      login: string;
    }
  }>;
}
export const IssuesList = ({ items }: IssuesListProps) => {

  return (
    <ContentContainer>
      {items && items.map((issue) => (
        <Card
          key={issue.id}
          title={issue.title}
          date={issue.created_at}
          content={issue.body}
        />
      ))}
    </ContentContainer>
  )
}
