import React, { useState } from 'react';
import './NameForm.css';

function NameForm() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('名前: ' + name);
        event.preventDefault();
    }

    return (
        <form className="name-form" onSubmit={handleSubmit}>
            <label>
                名前:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">送信</button>
        </form>
    );
}

export default NameForm;
