import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios"

export function Content() {
  let posts = [

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
