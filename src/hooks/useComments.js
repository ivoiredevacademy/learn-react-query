import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useComments(postId) {
  return useQuery({
    queryKey: ['comments', { postId }],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/posts/${postId}/comments`);
      return response.data;
    }
  })
}
