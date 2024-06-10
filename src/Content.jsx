import { Modal } from "./Modal";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow"
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
    
  const handleCreatePost = (theParams) => {
    console.log("handling the create post")
    axios.post("http://localhost:3000/posts.json", theParams).then(response => {
      console.log(response.data);
      setPosts([...posts, response.data])
  })
}

  // const handleUpdatePost = (theParams) => {
  //   axios.patch(`http://localhost:3000/posts/${post.id}.json`, theParams).then (response =>{
  //   console.log(response.data);
  //   setPosts([...posts, response.data])
  // })
  // }
    
  return (
    <main>
      <PostsNew onCreatePost={handleCreatePost} />
      <br/>
      <br/>
      <button title="Press Here" onClick={handleIndexPosts}> BIG RED BUTTON</button>
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>  
        Children
       <PostsShow post={currentPost}/> 
      </Modal>

    </main>
  );
}
