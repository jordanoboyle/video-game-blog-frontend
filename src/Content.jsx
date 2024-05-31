import { Modal } from "./Modal";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [posts, setPosts] = useState([])
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false) /*We want to be able to change this dynamically */

  const handleIndexPosts = () => {
    axios.get('http://localhost:3000/posts.json').then(response => {
        console.log(response.data);
  
        setPosts(response.data);
  
      })
    }
    useEffect(handleIndexPosts, [])
    
    const handleShowPost = () => {
      console.log("show me the post please");
      setIsPostsShowVisible(true);
    }
    const handleClose = () => {
      console.log("closing the button")
      setIsPostsShowVisible(false);
    }
    
    
  return (
    <main>
      <PostsNew />
      <br/>
      <br/>
      <button title="Press Here" onClick={handleIndexPosts}> BIG RED BUTTON</button>
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      {/*This is DATADOWN            THIS IS EVENT UP from PostsIndex */}
      {/*DATA passed to PostsIndex      onClick=onShowPost being passed up*/}
      <Modal show={isPostsShowVisible} onClose={handleClose}>  {/*Most of the time a modal will be self closing.*/}
        THHESE BE CHILLENS 
      </Modal>

    </main>
  );
}
