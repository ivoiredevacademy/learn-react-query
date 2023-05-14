import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getClassName = (path) => {
    let defaultClassName = "ml-10 pb-6";
    if(isActive(path)) {
      defaultClassName += " border-b-4 border-b-blue-600"
    }

    return defaultClassName;
  }

  return (
    <div className="pt-6 border-b-2 border-b-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-serif text-3xl">Blog</Link>

        <div>
          <ul className="flex">
            <li className={getClassName('/')}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={getClassName('/authors')}>
              <Link to="/authors">Auteurs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
