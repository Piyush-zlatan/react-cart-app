import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpnJhHp3UTw-8y1OOPcInzv3AsdOu0Ffg",
  authDomain: "cart-85620.firebaseapp.com",
  databaseURL: "https://cart-85620.firebaseio.com",
  projectId: "cart-85620",
  storageBucket: "cart-85620.appspot.com",
  messagingSenderId: "97655220051",
  appId: "1:97655220051:web:f20da8f0ef689f216563a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

