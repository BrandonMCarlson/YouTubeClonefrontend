import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
<<<<<<< HEAD
import DisplayComments from "./DisplayComments/DisplayComments";
=======
import CommentForm from "./components/commentForm";

>>>>>>> 0294114fe7a2d1edca94a21fa48c33cf93d6688e


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
<<<<<<< HEAD
      <p> {counter}</p>
      <button onClick={() => setCounter(counter + 1)}> Click me</button>
      <DisplayComments/>
=======
      <button onClick={() => getDataButton()}>CLICKME</button>
      {comments.map((comment, i) => <li key={i}> {comment.text} videoID: {comment.videoID} </li>)}
      <CommentForm/>
>>>>>>> 0294114fe7a2d1edca94a21fa48c33cf93d6688e
    </div>
    
  );
}




export default App;
