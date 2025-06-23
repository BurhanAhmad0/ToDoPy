import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { AppProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Toaster position='top-right' />
          <App />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
