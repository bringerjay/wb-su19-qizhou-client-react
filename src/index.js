import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/js/src/collapse.js";
import * as serviceWorker from './serviceWorker';
import HomePage from "./components/HomePage";


ReactDOM.render(

    <HomePage/>,
    document.getElementById('root')
);
serviceWorker.unregister();
