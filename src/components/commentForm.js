import React from 'react';
import useForm from "./useForm";

const CommentForm = () => {
    const { values, handleChange, handleSubmit } = useForm(addwords);

    function addwords(){
        alert(`Your comment reads as ${values.comment}`);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Comment:
                <input
                    type="comment"
                    name="comment"
                    onChange={handleChange}
                    value={values.comment}
                    required={true}
                />
            </label>
            <button type="submit"> Submit Comment</button>
        </form>
        </div>
    );
};

export default CommentForm;