import React from 'react';
import "./styles.css";

function DisplayStatus ({ type, message }) {       
    return (
        <div className={type === "success" ? "success" : "error"}>
            <p>{message}</p>
        </div>
    );
}

export default DisplayStatus;