import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clouds from './composants/cloud';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clouds />
    <App />
  </React.StrictMode>
);

