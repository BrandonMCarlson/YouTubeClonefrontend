import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useForm from "../useForm";

function LikeButton () {
    const [likes, setLikes]= useState([])
    const { value, handleChange, handleSubmit } = useForm(addLike);

    async function addLike () {
        await axios
        .put('http://localhost:5050/api/comments/619c3152d716534e03f7fed5', {
            videoID: "FOYnwJG8ucI",
            text: value,
            likes: 0
        })
        .then((res) => {
            setLikes(res.data);
        });
    };
    
    
    useEffect(() => {
    }, [likes]);
    
        
        return (
            
            <div>          
            
            <p> {likes}</p>
            <button onClick={() => setLikes(likes + 1)}> Like</button>

            
            </div>   
    );      
    
}




export default LikeButton;