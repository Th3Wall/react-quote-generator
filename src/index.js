import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const appHeight = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
window.addEventListener('resize', appHeight)
appHeight();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
