import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/main/app.component';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, withRouter} from "react-router-dom";

ReactDOM.render(
    <Router><App/></Router>,
    document.getElementById('root')
);

serviceWorker.register();