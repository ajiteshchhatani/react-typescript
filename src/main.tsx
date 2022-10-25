import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './components/Index/Index'
import Counter from './components/Counter/Counter'
import TodoList from './components/TodoList/TodoList'
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/counter",
        element: <Counter />
      },
      {
        path: "/todolist",
        element: <TodoList />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
