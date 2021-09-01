import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CommentSection from '../CommentSection/CommentSectionContainer';
// import CommentSection from '../CommentSection/CommentSectionContainer';
// import { Base64 } from 'js-base64'

import './DummyPosts.css';

const DummyPost = props => {
  const [visibleComments, setVisibleComments] = useState(false);

  const { post } = props;
  return (
    <div className='post-border'>
      <div className='post-image-wrapper'>

        <Link to={{ pathname: `/card/${post.id}`, state: post }}>
          <img
            alt='post thumbnail'
            className='post-image'
            src={props.post.imageUrl}
          />
          <p className='post-title'>{props.post.title}</p>
        </Link>


      </div>
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
        <div className='post-toogle-btn-close'>
         
          <CommentSection
            postId={props.post.imageUrl}
            comments={props.post.comments}
          />
           <Button
            variant="contained"
            color="primary"
            onClick={() => setVisibleComments(false)}>
            Close commetns
          </Button>
        </div>
      }
    </div>
  );
};

export default DummyPost;
