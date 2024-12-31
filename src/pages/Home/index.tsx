import { DefaultContainer } from "../../styles/global"
import { Profile } from "./components/Profile"
import { FormSearch } from "./components/FormSearch"
import { IssuesList } from "./components/IssuesList"
import { useState } from "react"
import { useDebounce } from "../../hooks/use-debounce"
import { useIssues } from "../../hooks/use-issues"

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const useDebounceSearch = useDebounce(searchTerm, 500);

  const { data } = useIssues(useDebounceSearch);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <DefaultContainer>
      <Profile />
      <FormSearch onSearch={handleSearch} search={searchTerm} total_posts={data?.total_count || 0} />
      <IssuesList items={data?.items || []} />
    </DefaultContainer>
  )
}
