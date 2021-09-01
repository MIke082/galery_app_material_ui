import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
  const [data, setData] = useState(props.comments)
  const [comment, setComment] = useState('');
  
 
  const submitComment = (e) => {
    e.preventDefault();

    setData(data => [...data, {username: 'Guest', text: comment} ]);
    setComment('');
  }

  const changeComment = e => {
      setComment(e.target.value);
  }

  console.log(props.comments)

  return (
    <div>
      {
        data.map((comment, i) => 
          <Comment key = {i} comment = {comment} />
        )
      }
      <CommentInput comment={comment} changeComment={changeComment} submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
