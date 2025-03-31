import React from 'react';

function DisplayStatus ({ type, message }) {       
    return (
        <div className={type === "success" ? "success" : "error"}>
            <p>{message}</p>
        </div>
    );
}

export default DisplayStatus;