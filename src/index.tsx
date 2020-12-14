import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreContext } from './store/StoreContext';
import { BrowserRouter } from "react-router-dom"


const app = (
  <BrowserRouter>
    <StoreContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StoreContext> 
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
