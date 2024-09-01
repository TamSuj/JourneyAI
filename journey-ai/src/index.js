import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { UserProvider } from './UserContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // UserProvider provide the global data around such as current user_id 
  <UserProvider>
      <App></App>
  </UserProvider>
);

reportWebVitals();
