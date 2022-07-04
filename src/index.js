import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserView, MobileView } from 'react-device-detect';
import App from './App';
import MobileApp from "./MobileApp";
import './scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserView>
          <App />
      </BrowserView>
      <MobileView>
          <MobileApp />
      </MobileView>
  </React.StrictMode>
);
