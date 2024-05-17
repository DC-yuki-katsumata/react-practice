import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="timer">
            <p>Time: {count} seconds</p>
        </div>
    );
}

export default Timer;
