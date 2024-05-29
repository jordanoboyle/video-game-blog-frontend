import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
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

  const handleIndexPosts = () => {
    console.log("GETTING THE DATA THINGS")
  }
  return (
    <div>
      <PostsNew />
      <br/>
      <br/>
      <br/>
      <button title="Press Here" onClick={handleIndexPosts}> Press Here To Add</button>
      <PostsIndex posts={posts} />
    </div>
  );
}
