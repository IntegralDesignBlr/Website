// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';        // ← new import
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';  // adjust if you named it differently
import App from './App';
import './App.css';                                    // your global styles

const container = document.getElementById('root');
const root = createRoot(container);                   // ← create the root

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
