import React from 'react'
import ReactDOM from 'react-dom/client'


const heading1 = React.createElement("p", {id: 'heading1'}, "paragraph 1");
const heading2 = React.createElement("p", {id: 'heading2'}, "paragraph 2");

const name = React.createElement("h1", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(name);