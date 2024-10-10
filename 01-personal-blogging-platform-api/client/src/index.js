// RENDERING THE APP

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root element from HTML
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
