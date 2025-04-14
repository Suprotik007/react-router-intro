import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Laptops from './components/Laptops/Laptops.jsx'
// import Mobile from './components/Mobile/Mobile.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,Component:Home}, 
      {path: 'Mobile',Component:Mobile},
      {path: 'laptop',Component:Laptops}
    ]
  },
  {
    
    path: "/",
    element: <div>Hello World</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <Header></Header> */}
  </StrictMode>,
)
