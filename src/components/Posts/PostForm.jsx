import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

export function PostForm() {
  const queryClient = useQueryClient();
  const params = useParams();
  const [comment, setComment] = useState({
    email: '',
    body: '',
  });

  const createCommentMutation = useMutation({
    mutationFn: (commentAttributes) => axios.post(`http://localhost:3000/comments`, commentAttributes),
    onSuccess: () => setComment({ email: '', body: '' }),
    onError: () => console.log('Il y a eu une erreur...')
  })

  function handleInputChange(event) {
    setComment((comment) => ({
      ...comment,
      [event.target.name]: event.target.value,
    }))
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const { data } = await createCommentMutation.mutateAsync({
        ...comment,
        postId: params.postId
      });

      addComment(data)
    } catch (error) {
      console.error(error);
    }
  }

  function addComment(comment) {
    queryClient.setQueryData(["comments", { postId: params.postId }], (comments) => [comment, ...comments])
  }

  function invalidateComments() {
    queryClient.invalidateQueries({
      queryKey: ["comments", { postId: params.postId }]
    })
  }

  return (
    <div>
      {
        createCommentMutation.isError ?
          <div className="text-red-600 text-center bg-red-100 py-10 rounded">
            {createCommentMutation.error?.message}
          </div> : null
      }
      <form className="mb-20" onSubmit={handleFormSubmit}>
        <div className="my-5">
          <input type="text" placeholder="Email" name="email" className="input w-full" onChange={handleInputChange} value={comment.email} required />
        </div>
        <div className="my-5">
          <textarea required cols="10" rows="4" name="body" className="input w-full" onChange={handleInputChange} value={comment.body} placeholder="Donnez-nous votre avis..."></textarea>
        </div>
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white " type="submit">
          Commenter
        </button>
      </form>
    </div>

  )
}
