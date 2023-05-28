import axios from "axios";
import { Post } from "../components/Posts/Post";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { useAuthors } from "../hooks/useAuthors";


const truncate = (str, length = 20) => str.substr(0, length, ) + '...';

export function Home() {
  const [searchText, setSearchText] = useState('');
  const { error, data, status, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const url = `http://localhost:3000/posts?_limit=12&page=1&title_like=${searchText}`
      return axios.get(url)
    },
    cacheTime: 30000,
  })

  const { data: authors } = useAuthors();

  function getAuthor(post) {
    return authors?.data?.find((author) => author.id === post.userId)?.name || "Anonyme";
  }

  if(status === 'loading') {
    return <div className="text-gray-500 text-center text-xl my-4">Loading...</div>
  }

  if(isError) {
    return <div className="text-red-500 text-center text-xl my-4">{error.message}</div>
  }

  function handleKeyPressed(e) {
    if(e.key === 'Enter') {
      refetch();
    }
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-5xl text-center my-10">Articles</h1>
        <input type="text" className="input" onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyPressed}
        />
      </div>

      <div className="flex flex-wrap -mx-8 py-10">
        {
          data?.data.map((post) => (
            <div className="w-1/3 px-8 my-8" key={post.id}>
              <Post
                title={truncate(post.title, 70)}
                description={truncate(post.body, 200)}
              />
              <small>
                Ecrit par: { getAuthor(post) }
              </small>
            </div>
          ))
        }
      </div>
    </>
  )
}


