import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import  firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  //copy paste your config from fire base.......
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

