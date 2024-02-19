import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Button from "@mui/material/Button";
import "./Post.css"
import usePostDispatch from '../hooks/PostDispatch';

const Post = ({ id, title, description, editPost }) => {

    const dispatch = usePostDispatch();

    return (
        <>
            <div className='card-ex'>
                <Card className="card">
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://source.unsplash.com/featured/?coding"
                        alt="Coding"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
                <Button className="btn" variant="contained" color="primary" onClick={() => editPost(id)}>
                    Edit
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="primary" onClick={() => dispatch({ type: "DELETE", payload: id })}>
                    Delete
                </Button>
            </div >

        </>
    )
}

export default Post