import React,{useState, useRef} from 'react'
import Header from './Header'
import {checkValidData} from '../utils/formValidation.js'
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()

  const [isSigninForm , setIsSigninForm] = useState(true)
  const [errorMessage , seterrorMessage ] = useState(null)

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm)
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    //yashashri001@gmail.com
    //Yash001@123#  Yash002@123#  Yash003@123# 
    //1. Validate form dats
    const message = checkValidData(email.current.value , password.current.value)
    seterrorMessage(message)

    //2. form validation is done , now we can proceed with signin signup
    //there is no error  - we can signin/signup user
    if(message === null){
        if(!isSigninForm){
          //signup logic
          createUserWithEmailAndPassword(auth, 
            email.current.value, 
            password.current.value
          )
            .then((userCredential) => {
              // Signup success
              const user = userCredential.user;
              console.log("Successfully cretaed user")
              console.log(user)
              navigate("/browse")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("there is some error",errorCode)
              
            });
        }
        else{
          //signin logic
          signInWithEmailAndPassword(auth, 
            email.current.value, 
            password.current.value
          )
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user signedin success")
            console.log(user)
            navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("user signedin fail")
            console.log(errorCode+ " "+errorMessage)
          });
        }
    }

  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner_img"
        />
      </div>
      <form onSubmit={(e)=>{handleFormSubmission(e)}} className="w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSigninForm ? "Sign In" : "Sign up"}</h1>
        {!isSigninForm && 
          <input 
            ref={name}
            type="text" 
            placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-700 rounded-lg'
          />
        }
        <input 
          ref={email}
          type="text" 
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg'
        />
        <input
          ref={password} 
          type="password" 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg'
        />
        <p className="text-red-500">{errorMessage}</p>
        <button 
          className='p-4 my-6 bg-red-700 w-full rounded-lg' 
        >
          {isSigninForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={()=>toggleSignInForm()}>{isSigninForm ? "New to Netflix? Sign Up Now" : "Already have an account, sign in here"}</p>
      </form>
    </div>
  )
}

export default Login
