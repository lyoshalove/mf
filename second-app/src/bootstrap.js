import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'

const init = (node) => {
  const root = createRoot(node);

  root.render(<App />);
}

export default init;