
import { useAuthors } from "../hooks/useAuthors";

export function Users() {
  const { data: authors } = useAuthors();

  return (
    <div>
      <h1 className="text-4xl my-8 text-center">Auteurs</h1>
      <ul>
        {
          authors?.data.map((author) => (
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
