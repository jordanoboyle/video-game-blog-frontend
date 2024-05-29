export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <img src={post.image} />
          <p>{post.body}</p>
          <button>More Information</button>
        </div>
      ))}
    </div>
  );
}
