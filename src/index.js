import React from 'react';
import ReactDOM from 'react-dom';
import Main from './modules/main/main.component';
// import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(
    <Main />,
    document.getElementById('root')
);


// serviceWorker.register();