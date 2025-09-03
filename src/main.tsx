import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './components/About.tsx'
import Body from './components/Body.tsx'
import Contact from './components/Contact.tsx'
import Menu from './components/Menu.tsx'
import { Provider } from 'react-redux'
import store from './utils/store.ts'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
    path:'/about',
    element:<About/>
  },{
    path:'/',
    element:<Body/>
  },{
    path:'/contact',
    element:<Contact/>
  },{
    path:'/restaurant/:resId',
    element:<Menu/>
  }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
  </Provider>
)
