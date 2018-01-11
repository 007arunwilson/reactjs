import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoreApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CoreApp/>, document.getElementById('root'));
registerServiceWorker();
