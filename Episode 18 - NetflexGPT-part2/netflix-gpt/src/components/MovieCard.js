import React from 'react'
import {IMG_CDN} from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48'>
      <img src={IMG_CDN+posterPath} alt="Movie Poster"/>
    </div>
  )
}

export default MovieCard
