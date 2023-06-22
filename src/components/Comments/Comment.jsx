export function Comment({ comment }) {
  return (
    <div className="my-8 flex items-start">
      <img src={`https://i.pravatar.cc/40?u=${comment.email}`} alt="" className="rounded-full mr-2" />
      <div className="border border-gray-300 p-4 rounded-lg flex-1 ">
        <span className="text-gray-500">@{comment.email}</span>
        <p>
          {comment.body}
        </p>

      </div>
    </div>
  )
}
