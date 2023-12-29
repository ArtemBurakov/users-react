import React from 'react'
import { preload } from 'swr'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

import { getUsers, usersUrlEndpoint as cacheKey } from './api/usersApi'

preload(cacheKey, getUsers)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
