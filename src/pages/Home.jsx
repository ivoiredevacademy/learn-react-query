import { Post } from "../components/Posts/Post";

export function Home() {
  return (
    <>
    <h1 className="text-5xl text-center my-10">Articles</h1>
     <div className="flex flex-wrap -mx-8 py-10">
      <div className="w-1/3 px-8 my-8">
        <Post
          title="Lorem ipsum dolor sit"
          description="Deserunt similique assumenda saepe ipsum nobis quos cupiditate excepturi ab atque fugit facilis deleniti eveniet veniam nostrum harum, provident esse autem sunt?"
        />
      </div>
      <div className="w-1/3 px-8 my-8">
        <Post
          title="Lorem ipsum dolor sit"
          description="Deserunt similique assumenda saepe ipsum nobis quos cupiditate excepturi ab atque fugit facilis deleniti eveniet veniam nostrum harum, provident esse autem sunt?"
        />
      </div>
      <div className="w-1/3 px-8 my-8">
        <Post
          title="Lorem ipsum dolor sit"
          description="Deserunt similique assumenda saepe ipsum nobis quos cupiditate excepturi ab atque fugit facilis deleniti eveniet veniam nostrum harum, provident esse autem sunt?"
        />
      </div>
      <div className="w-1/3 px-8 my-8">
        <Post
          title="Lorem ipsum dolor sit"
          description="Deserunt similique assumenda saepe ipsum nobis quos cupiditate excepturi ab atque fugit facilis deleniti eveniet veniam nostrum harum, provident esse autem sunt?"
        />
      </div>
      <div className="w-1/3 px-8 my-8">
        <Post
          title="Lorem ipsum dolor sit"
          description="Deserunt similique assumenda saepe ipsum nobis quos cupiditate excepturi ab atque fugit facilis deleniti eveniet veniam nostrum harum, provident esse autem sunt?"
        />
      </div>
      <div className="w-1/3 px-8 my-8">
        <Post
          title="Lorem ipsum dolor sit"
          description="Deserunt similique assumenda saepe ipsum nobis quos cupiditate excepturi ab atque fugit facilis deleniti eveniet veniam nostrum harum, provident esse autem sunt?"
        />
      </div>
    </div>
    </>

  )
}
