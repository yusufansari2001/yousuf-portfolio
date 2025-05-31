import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">    <App /></div>
  </StrictMode>,
)




