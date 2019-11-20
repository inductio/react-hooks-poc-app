import React, { useState } from 'react';

const App = () => {
    const [currentResource, setResourceValue] = useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResourceValue('posts')}>Posts</button>
                <button onClick={() => setResourceValue('todos')}>Todos</button>
            </div>
            {currentResource}
        </div>
    );
};

export default App;
