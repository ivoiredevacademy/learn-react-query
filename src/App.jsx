import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { PostDetails } from "./pages/PostDetails"
import { RouterProvider } from "react-router-dom"
import { Layout } from "./components/layouts/Layout"
import { Users } from "./pages/Users"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/authors",
        element: <Users />
      },
      {
        path: "/posts/:postId",
        element: <PostDetails />
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
