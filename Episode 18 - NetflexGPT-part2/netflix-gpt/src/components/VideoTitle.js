import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h1 className='py-6 text-lg w-2/5'>{overview}</h1>
      <div>
        <button className='bg-white text-black p-4 px-16 text-xl hover:bg-opacity-80 rounded-lg'>Play</button>
        <button className=' mx-2 bg-white text-black p-4 px-16 text-xl hover:bg-opacity-80 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
