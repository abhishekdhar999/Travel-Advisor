import React from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App name="travel" />);

// During an update, there is no need to pass the container again
root.render(<App name="travel" />);