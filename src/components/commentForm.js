import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useForm from "../useForm";

function CommentForm() {
    const [comments, setComments] = useState([]);
    const { value, handleChange, handleSubmit } = useForm(postForm);
    

    async function postForm() {
        await axios
        .post('http://localhost:5050/api/comments', {
            videoID: "FOYnwJG8ucI",
            text: value
        })
        .then((res) => {
            setComments(res.data);
        });
    };


    useEffect(() => {
    }, []);
    
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Comment:
                <input
                    type="text"
                    name="comment"
                    onChange={handleChange}
                    value={value}
                    required={true}
                />
            </label>
            <input type="submit" value="submit form"/>
        </form>
        </div>
    );
};

export default CommentForm;