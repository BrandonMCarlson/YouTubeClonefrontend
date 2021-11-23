import { useState } from 'react';

const useForm = (callback) => {
    const [values, setComments] = useState({});

    const handleChange = (event) => {
        event.persist();

        setComments(values => ({...values, [event.target.name]: event.target.value }));

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        callback();
    };

    return { values, handleChange, handleSubmit }
};

export default useForm;