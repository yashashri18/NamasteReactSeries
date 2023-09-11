import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h1 className='py-6 text-lg w-1/2'>{overview}</h1>
      <div>
        <button className='bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg'>Play</button>
        <button className=' mx-2 bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
