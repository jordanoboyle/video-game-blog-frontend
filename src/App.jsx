
function App() {
  return (
    <div>
      <header>
        <a href="#">Go To Main Menu</a> | <a href="#posts-index">Load Game Files</a> | <a href="#posts-new">Start New Game</a>
      </header>

      <div id="posts-new">
        <p>Hello, I am new to this page!</p>
        <h1>New post</h1>
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;