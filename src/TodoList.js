import React from 'react';
import TodoItem from './TodoItem'; // 必要に応じてインポートのパスを修正

function TodoList({ tasks }) { // タスクの配列を受け取る
    return (
        <ul>
            {tasks.map(task => (
                <TodoItem key={task.id} task={task.task} /> // 各タスクを TodoItem コンポーネントとして表示
            ))}
        </ul>
    );
}

export default TodoList;
