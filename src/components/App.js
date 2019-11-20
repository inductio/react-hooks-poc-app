import React, { useState } from 'react';

const App = () => {
    const [currentResource, setResourceValue] = useState('posts');
    let [currentCount, setCount] = useState(0);

    return (
        <div>
            <div>
                <button onClick={() => setResourceValue('posts')}>Posts</button>
                <button onClick={() => setResourceValue('todos')}>Todos</button>
            </div>
            {currentResource}
            <div>
                <button onClick={() => setCount(++currentCount)}>Counter: {currentCount}</button>
            </div>
        </div>
    );
};

export default App;
