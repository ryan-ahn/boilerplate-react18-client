import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
