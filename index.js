const heading1 = React.createElement("p", {id: 'heading1'});
const heading2 = React.createElement("p", {id: 'heading2'});

const name = React.createElement("h1", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(name);