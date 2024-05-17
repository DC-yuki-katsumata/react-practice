import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ tasks }) {
    return (
        <ul className="todo-list">
            {tasks.map(task => (
                <TodoItem key={task.id} task={task.task} />
            ))}
        </ul>
    );
}

export default TodoList;
