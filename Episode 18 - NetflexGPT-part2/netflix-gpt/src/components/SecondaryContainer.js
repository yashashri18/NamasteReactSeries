import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  if(!movies) return null;

  return (
    <h1>Secondary Container</h1>
    // <div>
    //     <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
    //     {/* <MovieList title={"Popular"} movies = {movies.nowPlayingMovies}/>
    //     <MovieList title={"Trending"} movies = {movies.nowPlayingMovies}/>
    //     <MovieList title={"Horror"} movies = {movies.nowPlayingMovies}/> */}

    // </div>
  )
}

export default SecondaryContainer
