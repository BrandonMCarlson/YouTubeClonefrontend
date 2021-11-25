import React, { useState, useEffect } from "react";
import Comment from './Comment'

const CommentMapper = ({comments}) => {
  return (
    <ul>
      {comments.map((comment, i) => (
        <Comment comment={comment} i={i}/>
     ))}
    </ul>
  );
};

export default CommentMapper;
