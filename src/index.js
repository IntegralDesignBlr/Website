import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

const container = document.getElementById('root');
const root = createRoot(container);

// Use '/' for local development. In production use PUBLIC_URL (set from package.json homepage) if valid,
// otherwise fall back to '/'. This avoids route mismatches that cause a blank page locally.
const pub = process.env.PUBLIC_URL;
const basename = process.env.NODE_ENV === 'production'
  ? (pub && pub !== '.' ? pub : '/')
  : '/';

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);