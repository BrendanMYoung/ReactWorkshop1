import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRouter from "./Pages/PageRouter";
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./Services/cartContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <CartProvider>
              <PageRouter />
          </CartProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
