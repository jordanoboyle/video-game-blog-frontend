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
  console.log(props)
  return (
      <div id="posts-index">
        <h1>All posts</h1>
        {props.posts.map(post => (
        <div className="posts">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <img src={post.image_url}/>
            <p>{post.body}</p>
            <button>More Information</button>    
        </div>
        ))}
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
  let posts = [
    {
      id: 1,
      title: "Halo 2 Anniversary",
      body: "The revamped Anniversary Edition of Halo 2 can be considered a masterpiece that just made the original better",
      image_url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/Halo-2-Anniversary-Washed.jpg",
      date: "Date: January Day, Year"
    },
    {
      id: 2,
      title: "Super Mario Sunshine, the unsung hero of 3D Mario",
      body: "While this is always the darkhorse, I would argue it was one of the best entries in the series, with slightly silly controls.",
      image_url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-mario-sunshine/6/67/Super-mario-sunshine-1920x1080.jpg?width=1280",
      date: "Date: May Day, Year"
    },
    {
      id: 3,
      title: "Turrican, An underrated shoot-em up from the SNES Era",
      body: "A contender for one of the best 80s based videogame soundtracks really set the tone for this shooter. Contra Clone...maybe, but still great.",
      image_url: "https://static.tvtropes.org/pmwiki/pub/images/turrican1-1_7070.png",
      date: "Date: February Day, Year"
    },
  ];
  return (
    <div>
      <PostsNew/>
      <PostsIndex posts={posts}/>
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