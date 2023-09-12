import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'


const MainComponent2 = () => {

    const movies = useSelector(store => store.movies.nowPlayingMovies)

    //early return if movies not available
    if(!movies) return;
    
    const mainMovie = movies[0]
    const {id, original_title, overview} = mainMovie

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainComponent2
