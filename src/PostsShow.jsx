export function PostsShow(props) {
  return (
    <div>
      <p>{props.post.title}</p>
      <p>{props.post.image}</p>
      <p>{props.post.body}</p>
    </div>
  )
}