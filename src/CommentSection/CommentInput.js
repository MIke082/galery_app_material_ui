import { Button, Input } from '@material-ui/core';
import React from 'react';

const CommentInput = props => {

  return (
    <form
      className='comment-form'
      onSubmit={props.submitComment}>
      <Input
        type='text'
        value={props.comment}
        placeholder='Add comment... '
        onChange={props.changeComment}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.submitComment}>
        Post
      </Button>
    </form>
  );
};

export default CommentInput;
