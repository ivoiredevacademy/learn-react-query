import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="py-6 border-b-2 border-b-gray-100">
      <div className="container mx-auto text-center">
        <Link to="/" className="font-serif text-3xl">Blog</Link>
      </div>
    </div>
  )
}
