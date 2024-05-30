import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index" >
      <h1>All posts</h1>
      <Card className="cardPosts" style={{width: "18rem"}} border="danger">
        {props.posts.map(post => (
          <Card key={post.id} className="posts">
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.date}</Card.Text>
            <Card.Img variant="top" src={post.image} />
            <Card.Text>{post.body}</Card.Text>
            <Button>More Information</Button>
          </Card>
        ))}
      </Card>

    </div>
  );
}
