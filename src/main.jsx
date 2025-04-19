import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './Components/Routes/Routes.jsx'
import Authprovider from './Components/Provider/Authprovider.jsx'
import { Toaster } from 'sonner'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={Routes} ></RouterProvider>
      <Toaster richColors position="top-right" />
    </Authprovider>,
  </StrictMode>
)
