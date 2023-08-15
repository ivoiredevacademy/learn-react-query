import { useParams } from "react-router-dom"
import { useSinglePost } from "../hooks/usePosts"
import { useComments } from "../hooks/useComments";
import { Comment } from "../components/Comments/Comment";
import { PostForm } from "../components/Posts/PostForm";

export function PostDetails() {
  const { postId } = useParams();
  const { isLoading, data: post, isError, error } = useSinglePost(postId);
  const { isLoading: isCommentLoading, data: comments } = useComments(post?.id);

  if (isLoading) {
    return <div className="text-gray-500 text-center text-xl my-4">Loading...</div>
  }postId

  if (isError) {
    return <div className="text-red-500 text-center text-xl my-4">{error.message}</div>
  }

  return (
    <div className="my-20">
      <h1 className="text-4xl font-semibold mb-6">{post.title}</h1>
      <p className="mt-6 mb-20 text-lg text-gray-600">
        {post.body}
      </p>
      <PostForm/>
      { isCommentLoading ? 'Loading comment...': null }
      { comments && comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
