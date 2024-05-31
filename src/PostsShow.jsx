export function PostsShow(props) {
  const handleSubmit = () => {
    console.log("handling an update submission")
  }
  
  
  
  return (
    <div>
      <p>STILL THE CHILLENS HERE</p>
      <p>{props.post.title}</p>
      <p>{props.post.image}</p>
      <p>{props.post.body}</p>
      <br/>
      <br/>
      <br/>
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
        <button type="submit">Resave Game Data</button>
      </form>
    </div>
  )
}