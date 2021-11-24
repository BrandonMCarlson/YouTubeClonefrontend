import { useState } from "react";

const useForm = (callback) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    event.persist();

    setValue(event.target.value)
  };

  const handleSubmit = (event) => {
    //need an axios.post function here
    event.preventDefault();

    callback();
  };

  return { value, handleChange, handleSubmit };
};

export default useForm;
