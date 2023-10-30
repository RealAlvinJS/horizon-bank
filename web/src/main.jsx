import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Theme } from '@radix-ui/themes'
import { NextUIProvider } from '@nextui-org/react'
import '@radix-ui/themes/styles.css';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Theme>
        <App />
      </Theme>
    </NextUIProvider>
  </React.StrictMode>,
)
