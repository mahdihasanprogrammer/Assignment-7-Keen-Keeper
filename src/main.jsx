import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorPage from './pages/errorPage/ErrorPage'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/homePage/HomePage'
import TimeLinePage from './pages/timeline/TimeLinePage'
import StatsPage from './pages/statsPage/StatsPage'
import FriendDetailsPage from './pages/FriendDetailsPage/FriendDetailsPage'


const router = createBrowserRouter([
 {errorElement: <ErrorPage/>},

  {
    path: '/', 
    Component: MainLayout,
    children:[
      {index: true, Component: HomePage},
      {path:'/timeline', Component: TimeLinePage},
      {path:'/stats', Component:StatsPage},

      {
        path:'/friendDetails/:userId',
        Component:FriendDetailsPage,
        loader: () => fetch('/FriendData.json'),
      }
    ],
      
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router} />
      <ToastContainer />

  </StrictMode>,
)
