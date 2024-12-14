import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = (
    <h1 id='title' key="h1">
        Hello world
    </h1>
)

const Heading2 = () => {
    return (
        <div>
            <h1>Hello world 2</h1>
            <h2>My Name is Shripad</h2>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2 />);