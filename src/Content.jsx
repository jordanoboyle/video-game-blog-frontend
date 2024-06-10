import { Modal } from "./Modal";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow"
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [posts, setPosts] = useState([])
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false) 
  const [currentPost, setCurrentPost] = useState({})

  const handleIndexPosts = () => {
    axios.get('http://localhost:3000/posts.json').then(response => {
        console.log(response.data);
  
        setPosts(response.data);
  
      })
  }
    useEffect(handleIndexPosts, [])
    
  const handleShowPost = (myPost) => {
      console.log("show me the post please");
      console.log(myPost)

      setCurrentPost(myPost)
      setIsPostsShowVisible(true);
  }

  const handleClose = () => {
      console.log("closing the button")
      setIsPostsShowVisible(false);
  }
    
    
  return (
    <main>
      <Routes>
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ < Login/> } />
        <Route path="/logout" element={<LogoutLink/>} />
        <Route path="/posts/new" element={<PostsNew />} /> 
        <Route path="/posts" element={<PostsIndex posts={posts} onShowPost={handleShowPost}/>} />
      </Routes>
      <br/>
      <button> BIG RED BUTTON</button>
      <Modal show={isPostsShowVisible} onClose={handleClose}>  
        Children
       <PostsShow post={currentPost} /> 
      </Modal>

    </main>
  );
}
