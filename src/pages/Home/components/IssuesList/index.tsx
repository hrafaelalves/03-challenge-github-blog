
import { Card } from '../../../../components/Card'
import { ContentContainer } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContext';
import { useContextSelector } from 'use-context-selector';

export const IssuesList = () => {
  const issues = useContextSelector(IssuesContext, (context) => context.issues);

  return (
    <ContentContainer>
      {issues.items && issues.items.map((issue) => (
        <Card
          key={issue.id}
          number={issue.number}
          title={issue.title}
          date={issue.created_at}
          content={issue.body}
        />
      ))}
    </ContentContainer>
  )
}
