import React from 'react'
import netflix_logo from '../images/Netflix_Logo_PMS.png'
import user_icon from '../images/netflix_user.png'
import {signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const signoutHandleClick = () => {
    signOut(auth).then(() => {
      console.log("success - signout")
      navigate('/')
    }).catch((error) => {
      console.log("error - signout")
    });
  }

  return (
    <div className='flex justify-between items-center absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src={netflix_logo} alt="logo" className='w-44'/>
      {user && <div className='flex items-center'>
        <img className='w-10 h-10' src={user_icon} alt="user_icon"/>
        <p className='cursor-pointer' onClick={signoutHandleClick}>[Signout]{user.displayName}</p>
      </div>}
    </div>
  )
}

export default Header
