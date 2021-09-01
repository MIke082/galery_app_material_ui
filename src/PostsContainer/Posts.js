import React, { useState, useEffect } from 'react';
import './post.css';
// import Post from './Post';
import { db, auth } from '../Firebase'
import Modal from '@material-ui/core/Modal';
import ImageUpload from '../ImageUpload/ImageUpload';
import Button from '@material-ui/core/Button';
import Post from './Post';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [openP, setOpenP] = useState(false);
    // const [username, setUsername] = useState('asda');
    const [user, setUser] = useState('Mike');

    //  auth helper
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            }
        })
        // console.log(username);
        return () => {
            unsubscribe();
        }
    }, [user]);

    // pull post
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })))
        })
    }, []);

    return (
        <div>

            <Modal
                open={openP}
                onClose={() => setOpenP(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <ImageUpload />
                </div>

            </Modal>

            <div className="posts-component-list">
                {
                    posts.map(({ id, post }) => (
                        <Post key={id} postId={id} title={post.title} imageUrl={post.imageUrl} user={user} />
                    ))
                }
            </div>

            <div className="posts-btn-upload">
                <div className="auth_container">
                    <Button
                        onClick={() => setOpenP(true)}
                        variant="contained"
                        color="secondary" >
                        Upload
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Posts;