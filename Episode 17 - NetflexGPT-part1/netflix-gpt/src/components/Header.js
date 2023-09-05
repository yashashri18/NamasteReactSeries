import React from 'react'
import netflix_logo from '../images/Netflix_Logo_PMS.png'

const Header = () => {
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src={netflix_logo} alt="logo" className='w-44'/>
      <div></div>
    </div>
  )
}

export default Header
