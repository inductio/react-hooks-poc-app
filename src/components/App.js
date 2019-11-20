import React, { useState } from 'react';
import ResourceList from "./ResourceList";

const App = () => {
    const [resource, setResourceValue] = useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResourceValue('posts')}>Posts</button>
                <button onClick={() => setResourceValue('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
};

export default App;
