import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav-bar/navbar'
import Card from './components/card/card';
import Table from './components/table/table'


ReactDOM.render(
    <div>
        <NavBar />
        <Card />
        <Table />
    </div>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


