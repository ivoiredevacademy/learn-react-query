import axios from "axios";
import { Post } from "../components/Posts/Post";
import { useState, createRef } from "react";
import { useAuthors } from "../hooks/useAuthors";
import { usePosts } from "../hooks/usePosts";
import { Link } from "react-router-dom";

const truncate = (str, length = 20) => str.substr(0, length,) + '...';

export function Home() {
  const inputRef = createRef();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("")
  const { error, data: posts, status, isError, refetch } = usePosts({
    page,
    searchTerm
  })

  const { data: authors } = useAuthors();

  function getAuthor(post) {
    return authors?.data?.find((author) => author.id === post.userId)?.name || "Anonyme";
  }

  function fetchMoreArticles() {
    setPage((page) => page + 1);
    window.scrollTo({
      top: 0
    })
  }

  function fetchPreviousArticles() {
    setPage((page) => page - 1);
    window.scrollTo({
      top: 0
    })
  }

  function handleSearchChange(event) {
    setSearchTerm(inputRef.current.value)
    refetch();
  }


  if (status === 'loading') {
    return <div className="text-gray-500 text-center text-xl my-4">Loading...</div>
  }

  if (isError) {
    return <div className="text-red-500 text-center text-xl my-4">{error.message}</div>
  }

  const hasNextPages = posts?.data?.length === 15;
  const hasPreviousPages = page > 1;

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-5xl text-center my-10">Articles</h1>
        <input
          type="text"
          className="input"
          placeholder="Search articles..."
          ref={inputRef}
          onKeyDown={handleSearchChange}
        />
      </div>

      <div className="flex flex-wrap -mx-8 py-10">
        {
          posts?.data.map((post) => (
            <div className="w-1/3 px-8 my-8" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <Post
                  title={truncate(post.title, 70)}
                  description={truncate(post.body, 200)}
                />
                <small>
                  Ecrit par: {getAuthor(post)}
                </small>
              </Link>
            </div>
          ))
        }
      </div>
      <div className="w-full flex justify-between my-10">
        <div>
          {
            hasPreviousPages &&
            <button
              className="px-4 py-2 border flex rounded border-gray-500 text-gray-700"
              onClick={fetchPreviousArticles}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              Previous articles
            </button>
          }
        </div>

        {hasNextPages &&
          <button
            className="px-4 flex py-2 border rounded border-gray-500 text-gray-700"
            onClick={fetchMoreArticles}
          >
            Next page
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        }
      </div>
    </>
  )
}


