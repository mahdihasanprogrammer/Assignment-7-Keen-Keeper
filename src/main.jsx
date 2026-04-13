import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, RouterProvider } from 'react-router'


const router = createBrowserRouter([

])




createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router} />
      <ToastContainer />
      
  </StrictMode>,
)
