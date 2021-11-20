import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [counter, setCounter] = useState(0);
  const getAllComments = async () => {
    // await axios.get("http://localhost:5050/api/comments").then((response) => {
    //   console.log(response.data);
    //   setComments(response.data);
    // });
  };

  useEffect(() => {
    getAllComments();
  }, [counter]);
  return (
    <div>
      <p> {counter}</p>
      <button onClick={() => setCounter(counter + 1)}> Click me</button>
    </div>
  );
}

export default App;
