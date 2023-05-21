import axios from "axios";
import { Post } from "../components/Posts/Post";
import { useQuery } from '@tanstack/react-query';

export function Home() {

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: () => axios.get('http://localhost:3000/posts?_limit=12&page=1')
  })

  const truncate = (str, length = 20) => str.substr(0, length, ) + '...';

  return (
    <>
      <h1 className="text-5xl text-center my-10">Articles</h1>
      <div className="flex flex-wrap -mx-8 py-10">
        {
          posts?.data.map((post) => (
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
