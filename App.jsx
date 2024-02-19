import { useState } from 'react';
import './App.css'
import NewPost from './components/NewPost'
import PostList from './components/PostList'
import data from './data/fakePostData';

function App() {

  const [Posts, setPosts] = useState(data);
  const [editablePost, setEditablePost] = useState(null)

  const addPost = (Post) => {
    setPosts((posts) => [...posts, { ...Post, id: posts.length + 1 }])
  }

  const deletePost = (id) => {
    setPosts(Posts.filter((e) => e.id !== id))
  }

  const editPost = (id) => {
    setEditablePost(Posts.find((e) => e.id === id));
  }

  const updatePost = (post) => {
    let idx = Posts.findIndex((e) => e.id === post.id);
    let newPosts = [...Posts];
    newPosts.splice(idx, 1, post);
    setPosts(newPosts)
  }

  return (
    <>
      <h1>Welcome to React Practice Project</h1>
      <NewPost getPost={addPost} editablePost={editablePost} updatePost={updatePost} />
      <PostList Posts={Posts} delPost={deletePost} editPost={editPost} />
    </>
  )
}

export default App
