import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router'
import { RouterProvider } from 'react-router-dom'
import ContextAPI from './ContextAPI'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI>
      <RouterProvider router={Router} />
    </ContextAPI>
  </React.StrictMode>,
)
