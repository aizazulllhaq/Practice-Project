import { useState } from "react"
import data from "../data/fakePostData"
import Post from "./Post"


const PostList = ({ Posts, delPost, editPost }) => {

    return (

        <div className="container">
            {
                Posts.map((post) =>
                    <Post key={post.id} title={post.title} description={post.description} dellPost={delPost} editPost={editPost} id={post.id} />
                )
            }
        </div>
    )
}

export default PostList