import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CommentForm from "./components/commentForm";



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
  }, [])

  const getDataButton = () => {
    console.log(comments)
  }
  return (
    <div>
      <button onClick={() => getDataButton()}>CLICKME</button>
      {comments.map((comment, i) => <li key={i}> {comment.text} videoID: {comment.videoID} </li>)}
      <CommentForm/>
    </div>
  );
}

export default App;
