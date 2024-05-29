function Header() {
  return (
    <header>
      <a href="#">Go To Main Menu</a> | <a href="#posts-index">Load Game Files</a> | <a href="#posts-new">Start New Game</a>
    </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
      <p>Hello, I am new to this page!</p>
      <h1>New post</h1>
        <form>
          <div>
            Post Title: <input type="text"/>
          </div>
          <div>
            Date Entry: <input type="text"/>
          </div>
          <div>
            Record your game data here: <input type="text"/>
          </div>
          <div>
            Place image url here: <input src="url"/>
          </div>
          <button type="submit">SAVE YOUR GAME</button>
        </form>
    </div>
  )
}

function PostsIndex(props) {
  console.log(props.postTitle)
  return (
      <div id="posts-index">
        <h1>All posts</h1>
        <div className="posts">
            <h2>{props.postTitle}</h2>
            <p>Date: Month Day, Year</p>
            <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/Halo-2-Anniversary-Washed.jpg"/>
            <p>The revamped Anniversary Edition of Halo 2 can be considered a masterpiece that just made the original better</p>
            <button>More Information</button>    
        </div>
        <div className="posts">
            <h2>Super Mario Sunshine, the unsung hero of 3D Mario</h2>
            <p>Date: Month Day, Year</p>
            <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-mario-sunshine/6/67/Super-mario-sunshine-1920x1080.jpg?width=1280"/>
            <p>While this is always the darkhorse, I would argue it was one of the best entries in the series, with slightly silly controls.</p>
            <button>More Information</button>
        </div>
        <div className="posts">
            <h2>Turrican, An underrated shoot-em up from the SNES Era</h2>
            <p>Date: Month Day, Year</p>
            <img src="https://static.tvtropes.org/pmwiki/pub/images/turrican1-1_7070.png"/>
            <p>A contender for one of the best 80s based videogame soundtracks really set the tone for this shooter. Contra Clone...maybe, but still great.</p>
            <button>More Information</button>
        </div>
      </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
      <p>Site by: Jordan O'Boyle</p>
    </footer>
  )
}

function Content() {
  let postTitle = "Super Mario World"
  // console.log(postTitle)
  return (
    <div>
      <PostsNew/>
      <PostsIndex postTitle={postTitle}/>
    </div>
  )
}
function App() {
  return (
    <div>
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;