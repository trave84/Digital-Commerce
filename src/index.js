import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

//Provieder-Store dispatch/pull
import store from './redux/store.jsx'

ReactDOM.render(
  // Provider comp class: give  Store  context to rest of the App. 1) Dispatch actions=>specStore 2)Pull specStore=>spec comp 
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")   
);
