import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useForm from "../useForm";

function ReplyForm() {
    const [replies, setReplies] = useState([]);
    const { value, handleChange, handleSubmit } = useForm(postReply);
    

    async function postReply() {
        await axios
        .post('http://localhost:5050/api/comments/619c3152d716534e03f7fed5/replies', {
            videoID: "FOYnwJG8ucI",
            text: value
        })
        .then((res) => {
            setReplies(res.data);
        });
    };


    useEffect(() => {
    }, []);
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Reply:
                <input
                    type="text"
                    name="Reply"
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

export default ReplyForm;