import { api } from "../lib/api";

interface IssuesData {
  total_count: number;
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

interface FecthIssuesProps {
  query?: string;
}

export async function fetchIssues({ query = "" }: FecthIssuesProps) {
  const response = await api.get<IssuesData>(`/search/issues?q=${query}%20repo:hrafaelalves/03-challenge-github-blog`);
  return response.data
}


interface IssueData {
  title: string;
  id: number;
  body: string;
  created_at: string;
  comments: number;
  user: {
    id: number;
    login: string;
  }
}

interface FetchIssueByIdProps {
  id?: number;
}

export async function fetchIssueById({ id = 0 }: FetchIssueByIdProps) {
  const response = await api.get<IssueData>(`/repos/hrafaelalves/03-challenge-github-blog/issues/${id}`);
  return response.data
}
