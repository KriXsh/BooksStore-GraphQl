import React from 'react';
// import { parse } from 'graphql';
import { createRoot } from 'react-dom/client'; // Updated import statement
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
