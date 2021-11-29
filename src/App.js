import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CommentForm from "./components/commentForm";
import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import LikeButton from "./components/LikeButton";
import CommentMapper from "./components/commentMapper";
import EmbeddedVideo from "./components/EmbeddedVideoPlayer/EmbeddedVideoPlayer";

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
      <EmbeddedVideo   />
      <VideoPlayer />
      <CommentForm />
      <CommentMapper comments={comments} />
      <LikeButton />
    </div>
  );
}

export default App;
