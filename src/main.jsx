import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/all.scss';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
  "$1"
);
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
