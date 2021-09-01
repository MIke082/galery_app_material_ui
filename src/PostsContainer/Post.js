import React, { useState, useEffect } from 'react';
import './post.css';
// import Avatar from '@material-ui/core/Avatar';
import { db } from '../Firebase'
import firebase from 'firebase';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';



const Post = ({ postId, username, title, imageUrl, user }) => {

    const [comments, setcomments] = useState([]);
    const [comment, setcomment] = useState('');
    const [visibleComments, setVisibleComments] = useState(false);


    useEffect(() => {


        if (postId) {

            db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) => {
                    setcomments(snapshot.docs.map((doc) => doc.data()))
                })
        }

    }, [postId]);

    const postComment = (e) => {
        e.preventDefault();
        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            // username:user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),


        });
        setcomment('');

    }
    return (
        <div className="post">
            <img src={imageUrl} alt="img" className="post_image" />
            <h4 className="post_text"><strong>{username}</strong> {title}</h4>

            <div>
            {!visibleComments ?
                <div className='post-toogle-btn-open'>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setVisibleComments(true)}>
                        Open comments
                    </Button>
                </div>
                    :
                 <div style={{paddingBottom: 30}}>
                <div className="post_comments">
                    {
                        comments.map((comment, index) => (
                            <p key={index}>
                                <strong>{comment.username} </strong>{comment.text}
                            </p>
                        ))
                    }

                </div>
               
                        <form className="form_comment">
                            <Input
                                type="text"
                                className="post_input"
                                placeholder="Add a Comment"
                                value={comment}
                                onChange={(e) => setcomment(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                //   disabled={!comment}
                                type="submit"

                                onClick={postComment}
                            >
                                Post
                            </Button>
                        </form>

                    <div className="post-toogle-btn-close">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setVisibleComments(false)}>
                            Close commetns
                        </Button>
                    </div>
                     </div>
                }
            </div>
        </div>
    );
}

export default Post;
