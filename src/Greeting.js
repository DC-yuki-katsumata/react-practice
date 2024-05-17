import React from 'react';
import './Greeting.css';

function Greeting(props) {
    return (
        <div className="greeting">
            Hello, {props.name}
        </div>
    );
}

export default Greeting;
