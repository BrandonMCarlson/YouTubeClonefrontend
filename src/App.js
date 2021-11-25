import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CommentForm from "./components/commentForm";
import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import LikeButton from "./components/LikeButton";

function App() {
  const [comments, setComments] = useState([]);

  const getAllComments = async () => {
    await axios.get("http://localhost:5050/api/comments").then((response) => {
      console.log(response.data);
      setComments(response.data);
    });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div>
      <NavBar />
      <VideoPlayer />
      {comments.map((comment, i) => (
        <li key={i}>
          Comment: {comment.text}<br/>
          videoID: {comment.videoID}<br/>
          CommentID:{comment._id} <br/>
          likes: {comment.likes} <br/>
          dislikes: {comment.dislikes}<br/>
          {comment.replies
          .filter(reply => {
          if (reply) {
          return reply
        }})
        .map((replies, i) => {
          return (
            <li key={i} component='div'>
              .....replies: {replies.text} 
            </li>
          )
        })}
        </li>
      ))}
      <CommentForm />
      <LikeButton/>
    </div>
  );
}

export default App;
