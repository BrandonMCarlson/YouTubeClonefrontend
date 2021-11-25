import React, { useState, useEffect } from 'react';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';

const Comment = ({comment, i}) => {
    return ( 
        
        <div>
            <li key={i}>
          Comment: {comment.text}
          <br />
          videoID: {comment.videoID}
          <br />
          CommentID:{comment._id} <br />
          likes: {comment.likes} <br />
          dislikes: {comment.dislikes}
          <LikeButton/>
          <DislikeButton/>
          <br />
          {comment.replies
            .filter((reply) => {
              if (reply) {
                return reply;
              }
            })
            .map((replies, i) => {
              return (
                <li key={i} component="div">
                  .....replies: {replies.text}
                </li>
              );
            })}
        </li>
        
        </div>
    );
}
 
export default Comment;