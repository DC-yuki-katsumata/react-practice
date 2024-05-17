import React from 'react';

function TodoItem({ task }) { // タスクを受け取る
    return (
        <li>
            {task}
        </li>
    );
}

export default TodoItem;
