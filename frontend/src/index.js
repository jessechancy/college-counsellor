// console.log("My First Web App");
// document.querySelector('#fromjs').innerHTML = `<h1>From index.js</h1>`;

import React from 'react';
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
ReactDOM.createRoot(
    // document.querySelector("#root")
    document.querySelector(
        '#fromjs'
    )
).render(
    <React.StrictMode>
        <h1>Hello, world!</h1>
    </React.StrictMode>
    // 'Hello from index.js',
);