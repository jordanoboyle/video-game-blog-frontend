
import Button from "react-bootstrap/Button"
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index" >
      <h1>Saved Game Files</h1>
      <div className="cardPosts">
        {props.posts.map(post => (
          <div key={post.id} className="posts">
            <h2>{post.title}</h2>
            <p>{post.id}</p>
            <p>{post.date}</p>
            <img variant="top" src={post.image} />
            <p>{post.body}</p>
            <Button>More Information</Button>
            <button onClick={() => props.onShowPost(post)}>Update Saved Game Data</button>
          </div>
        ))}
      </div>

    </div>
  );
}
