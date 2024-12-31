import { api } from "../lib/api";

interface UserData {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  name: string;
  company: string;
}

export async function fetchUser(user: string) {
  const response = await api.get<UserData[]>(`/users/${user}`);

  return response.data
}
