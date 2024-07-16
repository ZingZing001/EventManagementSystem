import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
