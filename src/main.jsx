import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* <Routes>
          <Route path="/*" element={<App />} />
        </Routes> */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
