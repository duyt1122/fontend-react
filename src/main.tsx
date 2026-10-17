import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UsersPage from './screens/users.page.tsx'
// import './index.css'

const layoutAdmin = () => {
  return (
    <div>Layout Admin</div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <layoutAdmin />,
    children: [
      {
        path: "users",
        element: <UsersPage />
      },
    ]
  },

  {
    path: "/admins",
    element: <div>Manager Admins</div>
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
