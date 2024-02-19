import { TextField, Button, Grid, Container } from '@mui/material';
import { useEffect, useState } from 'react';

const NewPost = ({ getPost, editablePost, updatePost }) => {

    const [Post, setPost] = useState({ title: "", description: "" })

    const handleChange = (e) => {
        setPost(
            {
                ...Post,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editablePost) {
            updatePost(Post)
        } else {
            getPost(Post)
        }
        setPost({ title: "", description: "" })

    }


    useEffect(() => {
        if (editablePost) {
            setPost(editablePost)
        }
    }, [editablePost])

    return (
        <>
            <Container >
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} style={{ display: "flex", flexDirection: "column" }}>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Title"
                                name="title"
                                value={Post.title}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                value={Post.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button type="submit" variant="contained" color="primary">
                                {editablePost ? "Edit" : "Add"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    )
}

export default NewPost