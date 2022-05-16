import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartContextProvider from "./store/CartContextProvider";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCr0YmorRdbjIXknVlozZaZgwfsvGAYm-Q",
  authDomain: "clothy-alejandrol.firebaseapp.com",
  projectId: "clothy-alejandrol",
  storageBucket: "clothy-alejandrol.appspot.com",
  messagingSenderId: "469460153993",
  appId: "1:469460153993:web:2b629c973def468f5a3858",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
