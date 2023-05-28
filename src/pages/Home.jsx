import axios from "axios";
import { Post } from "../components/Posts/Post";
import { Spinner } from '../components/layouts/Spinner';
import { useQuery } from '@tanstack/react-query';

const truncate = (str, length = 20) => str.substr(0, length, ) + '...';

export function Home() {

  const result = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000), )
      return axios.get('http://localhost:3000/posts?_limit=12&page=1')
    }
  })


  if(result.status === 'loading') {
    return <div className="text-gray-500 text-center text-xl my-4">Loading...</div>
  }

  if(result.isError) {
    return <div className="text-red-500 text-center text-xl my-4">{result.error.message}</div>
  }

  return (
    <>
      <h1 className="text-5xl text-center my-10">Articles</h1>
      <div className="flex flex-wrap -mx-8 py-10">
        {
          result.data?.data.map((post) => (
            <div className="w-1/3 px-8 my-8" key={post.id}>
              <Post
                title={truncate(post.title, 70)}
                description={truncate(post.body, 200)}
              />
            </div>
          ))
        }
      </div>
    </>
  )
}


