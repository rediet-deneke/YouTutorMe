import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './firebase.js';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();
