import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LeftSideNavBarProvider from './context/LeftSideNavBarProvider.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ThemeProvider from './context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <GoogleOAuthProvider clientId="865240808272-usqmevtlguksgkeb480ek336di6r0hi7.apps.googleusercontent.com">

    <LeftSideNavBarProvider>
    <App />
    </LeftSideNavBarProvider>
    </GoogleOAuthProvider>
    </ThemeProvider>
  </StrictMode>
)
