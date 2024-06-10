import axios from "axios"

export function PostsShow(props) {
  
  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    const params = new FormData(event.target);
    //here we need to make the web request PATCH to update just like PostsNew
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then (response =>{
    // props.onPostUpdate(params);
    console.log(response.data)
    console.log("handling an update submission");
  })
  }
  const deletePost = () => {
    console.log("deleting the post desired!");
    axios.delete(`http://localhost:3000/posts/${props.post.id}.json`).then(response => {
      console.log(response.data);
    })
  }
  
  
  
  return (
    <div>
      <p>Modal OPEN</p>
      <p>{props.post.title}</p>
      <p>{props.post.image}</p>
      <p>{props.post.body}</p>
      <br/>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          Post Title: <input type="text" name="title" defaultValue={props.post.title}/>
        </div>
        <br/>
        <div>
          Record your game data here: <input type="text" name="body" defaultValue={props.post.body}/>
        </div>
        <br/>
        <div>
          Place image url here: <input type="text" name="image" defaultValue={props.post.image}/>
        </div>
        <button type="submit">Resave Game Data</button>
      </form>
        <br/>
        <br/>
        <br/>
        <button onClick={deletePost}>Delete Save Data</button>
    </div>
  )
}