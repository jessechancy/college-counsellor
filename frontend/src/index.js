// console.log("My First Web App");
// document.querySelector('#fromjs').innerHTML = `<h1>From index.js</h1>`;

import React from 'react';
import ReactDOM from "react-dom/client";
import './styles/index.css';
import App from './App';

ReactDOM.createRoot(
    // document.querySelector("#root")
    document.querySelector(
        '#root'
    )
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);