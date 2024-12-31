import { useQuery } from "@tanstack/react-query";
import { fetchIssueById, fetchIssues } from "../services/issues";

export const useIssues = (term: string) => {
  return useQuery({
    queryKey: ["issues", { term }],
    queryFn: () => fetchIssues({ query: term }),
  });
}

export const useIssue = (id: number) => {
  return useQuery({
    queryKey: ["issue", { id }],
    queryFn: () => fetchIssueById({ id }),
  });
}
