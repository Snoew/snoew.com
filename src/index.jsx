import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Viewer from './Viewer';

const requestOptions = {
  method: 'GET',
};

function showStreams(users, streams) {
  const displayNames = users.data.map((user) => user.display_name);
  const live = streams.data.map((stream) => stream.user_name);
  const logins = users.data.map((user) => user.login);

  if (live.length === 0) {
    console.log('No live streams');
  }

  ReactDOM.render(
    <Header live={live} />,
    document.getElementById('root'),
  );


  ReactDOM.render(
    <div>
      <Viewer channel={live[1]} width={'70vw'} height={'45.75vh'} />
      <div>
      <Viewer channel={live[0]} width={'70vw'} height={'45.750vh'} />
      </div>
    </div>,
    document.getElementById('top'),
  );
}

function getStreams(users) {
  fetch('http://localhost:42069/streams', requestOptions)
    .then((response) => response.text())
    .then((result) => showStreams(users, JSON.parse(result)))
    .catch((error) => console.log('error', error));
}

fetch('http://localhost:42069/users', requestOptions)
  .then((response) => response.text())
  .then((result) => getStreams(JSON.parse(result)))
  .catch((error) => console.log('error', error));


ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
