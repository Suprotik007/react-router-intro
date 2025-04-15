import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import App from './App.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import UserDetails from './components/UserDeatail/UserDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetail from './components/PostDetails/PostDetail.jsx';
import SinglePost from './components/Posts/SinglePost.jsx';

const usersPromise=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,Component:Home}, 
      {path: 'mobile',Component:Mobile},
      {path: 'laptop',Component:Laptops},
      {path: 'users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
path:'users2',
element:<Suspense fallback={<span>Loading....</span>}>
  <Users2 usersPromise={usersPromise}></Users2>
</Suspense>

      },
      {
        path:'users/:userId',
        loader:({params})=>
          // console.log('params:',params.userId);
           fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        
        
        Component:UserDetails
      },

      {
        path:'posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:'posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetail
      }
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

  </StrictMode>,
)
