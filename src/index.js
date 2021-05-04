import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './views/routes';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
