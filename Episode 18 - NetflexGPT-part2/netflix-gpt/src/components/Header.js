import React ,{ useEffect }from 'react'
import netflix_logo from '../images/Netflix_Logo_PMS.png'
import user_icon from '../images/netflix_user.png'
import {signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)


  useEffect(()=>{
    //this is like an eventlistener provided by firebase
    //which will be called on user auth related changes - signin, signup, signout, etc
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //signin , signup case
      if (user) {
        const {uid, email , displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        navigate('/browse')
      } 
      //signout case
      else {
        dispatch(removeUser())
        navigate('/')
      }
    });

    //way to unsubscribe when component unmounts
    return() => unsubscribe()
  },[])


  const signoutHandleClick = () => {
    signOut(auth).then(() => {
      console.log("success - signout")
    }).catch((error) => {
      console.log("error - signout")
      navigate('/error')
    });
  }

  return (
    <div className='flex justify-between items-center absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src={netflix_logo} alt="logo" className='w-44'/>
      {user && <div className='flex items-center'>
        <img className='w-10 h-10' src={user_icon} alt="user_icon"/>
        <p className='cursor-pointer text-white text-xl' onClick={signoutHandleClick}>Signout</p>
      </div>}
    </div>
  )
}

export default Header
