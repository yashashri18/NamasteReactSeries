import React,{useState} from 'react'
import Header from './Header'
const Login = () => {

  const [isSigninForm , setIsSigninForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm)
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
      <form className="w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSigninForm ? "Sign In" : "Sign up"}</h1>
        {!isSigninForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full'>{isSigninForm ? "Sign In" : "Sign up"}</button>
        <p className="py-2 cursor-pointer" onClick={()=>toggleSignInForm()}>{isSigninForm ? "New to Netflix? Sign Up Now" : "Already have an account, sign in here"}</p>
      </form>
    </div>
  )
}

export default Login
