import React from 'react';

function DisplayStatus ({ type, message }) {
    const style = {
        padding: "10px",
        marginTop: "10px",
        borderRadius: "5px",
        color: type === "success" ? "green" : "red",
        border: `1px solid ${type === "success" ? "green" : "red"}`,
        backgroundColor: type === "success" ? "#e6ffe6" : "#ffe6e6"
    };
       
    return (
        <div style = {style}>
            <p>{message}</p>
        </div>
    );
}

export default DisplayStatus;