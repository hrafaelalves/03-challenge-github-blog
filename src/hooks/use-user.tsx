import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/users";

export const useUser = (user: string) => {
  return useQuery({
    queryKey: ["user", { user }],
    queryFn: () => fetchUser(user),
  });
}
