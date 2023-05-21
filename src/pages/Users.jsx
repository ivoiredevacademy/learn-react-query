import axios from "axios";
import { useEffect, useState } from "react";

export function Users() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchAuthors() {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/users');
        setAuthors(response.data)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false)
      }
    }

    fetchAuthors();
  }, []);

  return (
    <div>
      <h1 className="text-4xl my-8 text-center">Auteurs</h1>
      <ul>
        {
          authors.map((author) => (
            <li key={author.id} className="flex flex-col my-4">
              <span>{author.name} <span className="text-gray-400">@{author.username}</span></span>
              <span className="text-gray-500">{author.email}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
