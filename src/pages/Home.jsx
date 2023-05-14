import { Post } from "../components/Posts/Post";

export function Home() {
  return (
    <div className="flex flex-wrap -mx-8 py-10">
      <div className="w-1/3 px-8">
        <Post title="Article" description="Description" />
      </div>

    </div>
  )
}
