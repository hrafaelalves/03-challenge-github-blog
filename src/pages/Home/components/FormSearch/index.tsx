import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { InputSearch, PublicationsContainer } from "./styles"
import { IssuesContext } from "../../../../contexts/IssuesContext";
import { useDebounce } from "../../../../hooks/use-debounce";

import { useContextSelector } from "use-context-selector";

export const FormSearch = () => {

  const { issues, fetchIssuesList } = useContextSelector(IssuesContext, (context) => ({
    issues: context.issues,
    fetchIssuesList: context.fetchIssuesList
  }));

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const fetchSearchResults = useCallback((search: string) => {
    fetchIssuesList(search);
  }, [fetchIssuesList]);

  useEffect(() => {
    fetchSearchResults(debouncedSearchTerm);
  }, [debouncedSearchTerm, fetchSearchResults]);

  return (
    <>
      <PublicationsContainer>
        <h3>Publicações</h3>

        <span>{issues.total_count} publicações</span>
      </PublicationsContainer>

      <InputSearch>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchTerm}
          onChange={handleChange}
        />
      </InputSearch>
    </>
  )
}
