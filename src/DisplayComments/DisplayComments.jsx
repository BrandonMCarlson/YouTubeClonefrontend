import React from 'react';
import "./DisplayComments.css";

function displayComments () {
    
    const handleChange = () 

    return (
        <div>
            <br />
            <p>Replies</p>

            <form stlye={{display: 'flex'}} onSubmit>
                    <textArea
                        style={{width: '100', borderRadius: '5px'}} 
                        onChange={handaleChange}
                        value
                        placeholder= "write some comments"
                    />
                    <br />
                    <button style={{ width: '20%', height:"52px"}}>Submit</button>
            </form>


        </div>

    )
}


export default displayComments;