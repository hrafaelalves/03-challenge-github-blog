import { useCallback, useEffect, useState } from "react";
import { fetchIssues } from "../services/issues";
import { createContext } from "use-context-selector";

interface Issues {
  total_count: number;
  items: Array<{
    title: string;
    id: number;
    number: number;
    body: string;
    created_at: string;
    comments: number;
    user: {
      id: number;
      login: string;
    }
  }>;
}

interface IssuesContextType {
  issues: Issues;
  fetchIssuesList: (query?: string) => Promise<void>;
}

export const IssuesContext = createContext({} as IssuesContextType);

interface IssuesProviderProps {
  children: React.ReactNode;
}

export const IssuesProvider = ({ children }: IssuesProviderProps) => {
  const [issues, setIssues] = useState<Issues>({
    total_count: 0,
    items: []
  });

  const fetchIssuesList = useCallback(async (query?: string) => {
    const { total_count, items } = await fetchIssues({ query });

    setIssues({ total_count, items });
  }, []);

  useEffect(() => {
    fetchIssuesList();
  }, [fetchIssuesList]);

  return (
    <IssuesContext.Provider value={{ issues, fetchIssuesList }}>
      {children}
    </IssuesContext.Provider>
  );
}
