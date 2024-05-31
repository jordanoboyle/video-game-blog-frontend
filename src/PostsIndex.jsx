import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index" >
      <h1>All posts</h1>
      <div className="cardPosts">
        {props.posts.map(post => (
          <div key={post.id} className="posts">
            <h2>{post.title}</h2>
            <p>{post.id}</p>
            <p>{post.date}</p>
            <img variant="top" src={post.image} />
            <p>{post.body}</p>
            <Button>More Information</Button>
            <button onClick={() => props.onShowPost(post)}>SHOW DIS MODAL</button>
            {/*Welcome to JS ^ we had to wrap this in another function to call this dynamically */}
          </div>
        ))}
      </div>

    </div>
  );
}
