import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/app/App.tsx';
import { BrowserRouter, history } from './pages/app/BrowserRouter.tsx';

import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)