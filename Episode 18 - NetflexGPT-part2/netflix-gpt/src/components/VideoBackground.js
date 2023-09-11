import React, { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'

const VideoBackground = ({movieId}) => {
  //fetch movie trailer here

  const getMovieVideos = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', API_OPTIONS)
    const json = await data.json()
    console.log(json)
  }

  useEffect(()=>{
    getMovieVideos()
  },[])

  return (
    <div>
      <h1>vbackground</h1>
    </div>
  )
}

export default VideoBackground
