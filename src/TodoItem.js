import React from 'react';

function TodoItem({ task }) {
    return (
        <li className="todo-item">
            {task}
        </li>
    );
}

export default TodoItem;
