import React from 'react';

function DisplayStatus(props) {
    return(
        <div>
            <p>${props.type}: ${props.message}</p>
        </div>
    )
}

export default DisplayStatus;