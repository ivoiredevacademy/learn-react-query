import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAuthors() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return axios.get('http://localhost:3000/users')
    },
    refetchOnWindowFocus: false,
    staleTime: 30000
  });
}
