import { useContext } from "react"
import Post from "./Post"
import PostContext from "../context/PostContext"


const PostList = ({ editPost }) => {

    const Posts = useContext(PostContext);

    return (

        <div className="container">
            {
                Posts.map((post) =>
                    <Post key={post.id} title={post.title} description={post.description} editPost={editPost} id={post.id} />
                )
            }
        </div>
    )
}

export default PostList