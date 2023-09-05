import React, { useEffect } from 'react'
import Login from './Login'
import Browse from  './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    //this is like an eventlistener provided by firebase
    //which will be called on user auth related changes - signin, signup, signout, etc
    onAuthStateChanged(auth, (user) => {
      //signin , signup case
      if (user) {
        const {uid, email , displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
      } 
      //signout case
      else {
        dispatch(removeUser())
      }
    });
  },[])

  const appRouter = createBrowserRouter([
    {
      path: "",
      element:<Login/>,
    },
    {
      path: "/browse",
      element:<Browse/>,
    }
  ])
  
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
