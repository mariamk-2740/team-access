import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './fonts/ROCK.TTF';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAd6eLbJsPuG2V699S_n0KcRenm3VLSC8E",
  authDomain: "connecta-access-it.firebaseapp.com",
  projectId: "connecta-access-it",
  storageBucket: "connecta-access-it.appspot.com",
  messagingSenderId: "910388986846",
  appId: "1:910388986846:web:380795639f69e26c92134f"
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>);