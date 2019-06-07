import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Resume from './myResume'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Resume />, document.getElementById('root'));
registerServiceWorker();
