import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/Route.jsx'
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <ToastContainer position="top-center" autoClose={3000} />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
