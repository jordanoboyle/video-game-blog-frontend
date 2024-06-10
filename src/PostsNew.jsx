import axios from "axios"

export function PostsNew(props) {
  
  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data);
      console.log("handling an update from separate page");
      window.location.href = "/posts";
    })
}
  
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Post Title: <input type="text" name="title"/>
        </div>
        <br/>
        <div>
          Record your game data here: <input type="text" name="body" />
        </div>
        <br/>
        <div>
          Place image url here: <input type="text" name="image" />
        </div>
        <br/>
        <button type="submit">SAVE YOUR GAME</button>
      </form>
    </div>
  );
}

