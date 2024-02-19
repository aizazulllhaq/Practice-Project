import Post from "./Post"
import usePosts from "../hooks/Posts"


const PostList = ({ editPost }) => {

    const Posts = usePosts();

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