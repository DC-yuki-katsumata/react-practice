// 練習問題 2: 状態管理の基本

// 問題
// 次の要件を満たすReactコンポーネントを作成してください：
// コンポーネント名は Counter とする。
// カウンターの値を表示し、ボタンをクリックするとカウンターの値が1増える。

import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Counter;
