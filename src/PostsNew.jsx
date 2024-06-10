import axios from "axios"

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handling a submit")
    const params = new FormData(event.target);
    console.log(event);
    props.onCreatePost(params);
    event.target.reset();
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

