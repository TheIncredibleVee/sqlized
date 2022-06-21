import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import './index.css'
import { ContextProvider } from './context';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);