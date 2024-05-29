export function PostsNew() {
  return (
    <div id="posts-new">
      <p>Hello, I am new to this page!</p>
      <h1>New post</h1>
      <form>
        <div>
          Post Title: <input type="text" />
        </div>
        <div>
          Date Entry: <input type="text" />
        </div>
        <div>
          Record your game data here: <input type="text" />
        </div>
        <div>
          Place image url here: <input src="url" />
        </div>
        <button type="submit">SAVE YOUR GAME</button>
      </form>
    </div>
  );
}
