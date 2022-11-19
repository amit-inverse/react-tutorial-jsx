// 1. Import the React and ReactDOM libraries
import { buildQueries } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Get a reference to the div with ID root
const el = document.getElementById('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
    // 1. All prop name follow camelCase
    // return <textarea autoFocus={true} />;

    // 2. Number attribute use curly braces
    // return <input maxLength={5} />;

    // 3. Boolean 'true' can be written with just the property name. 'false' should be written with curly braces
    // return <input spellCheck />;

    // 4. The 'class' attribute is written as 'className'

    // 5. In-line styles are provided as objects
    return <input style={{ border: '1px solid blue' }} />;
}

// 5. Show the component on the screen
root.render(<App />);
