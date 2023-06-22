import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

export function usePosts({ page, searchTerm }) {
  return useQuery({
    queryKey: ['posts', { page }],
    queryFn: async () => {
      let url = `http://localhost:3000/posts?_limit=15&_page=${page}`;
      if (searchTerm) {
        url += `&title_like=${searchTerm}`;
      }
      return axios.get(url)
    },
    cacheTime: 30000,
    keepPreviousData: true,
    retry: 1
  })
}


export function useSinglePost(postId) {
  return useQuery({
    queryKey: ['posts', postId],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/posts/${postId}`);
      return response.data;
    }
  })
}
