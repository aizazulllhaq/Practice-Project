import { useReducer, useState } from 'react';
import './App.css'
import NewPost from './components/NewPost'
import PostList from './components/PostList'
import data from './data/fakePostData';
import PostContext from './context/PostContext';
import PostDispatchContext from './context/PostDispatchContext';

function App() {

  const [editablePost, setEditablePost] = useState(null)
  const [Posts, dispatch] = useReducer(postReducer, data)


  function postReducer(Posts, action) { // This function Hoisted 
    switch (action.type) {
      case 'ADD':
        return [ // return like ( setPosts([...Posts, { ...Post, id: posts.length + 1 }]) )
          ...Posts,
          { ...action.payload, id: Posts.length + 1 }
        ]
      case 'UPDATE':
        let idx = Posts.findIndex((e) => e.id === action.payload.id);
        let newPosts = [...Posts];
        newPosts.splice(idx, 1, action.payload);
        setEditablePost(null);
        return newPosts
      case 'DELETE':
        return Posts.filter((e) => e.id !== action.payload);
      default:
        return Posts;
    }
  }

  const editPost = (id) => {
    setEditablePost(Posts.find((e) => e.id === id));
  }

  return (
    <PostContext.Provider value={Posts}>
      <PostDispatchContext.Provider value={dispatch}>

        <h1>Welcome to React Practice Project</h1>
        <NewPost editablePost={editablePost} />
        <PostList editPost={editPost} />

      </PostDispatchContext.Provider>
    </PostContext.Provider>
  )
}

export default App
