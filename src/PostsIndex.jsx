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
            <p>{post.date}</p>
            <img variant="top" src={post.image} />
            <p>
              {post.body}
            </p>
            <Button>More Information</Button>
          </div>
        ))}
      </div>

    </div>
  );
}
