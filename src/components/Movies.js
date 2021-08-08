import React from "react";
import { movies } from "../data";

function Movies() {
 
  const moviesData=movies.map(movie=>{
   return  <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      <ul>
        {movie.genres.map(genre=>{
         return <li key={genre}>{genre}</li>
        })}
      </ul>
      </div>
  })
  return (
  <>
    <h1>Movies Page</h1>
    {moviesData}

  </>);
}

export default Movies;
