import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stream from './streams';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';
import Viewer from './Viewer';

var requestOptions = {
  method: 'GET'
};

fetch("http://localhost:42069/streams", requestOptions)
.then(response => response.text())
.then(result => showInfo(JSON.parse(result)))
.catch(error => console.log('error', error));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function showInfo(info) {
  console.log(info.data[0].user_name)
  ReactDOM.render(<Viewer channel={info.data[0].user_name}/>, document.getElementById('info'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
