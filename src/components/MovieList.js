import Movie from "./Movie";
import React from "react";

import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
          axios.get('http://127.0.0.1:8080/movies')
            .then(res => {
              const movies = res.data;
             // res.header("Access-Control-Allow-Origin", "*");
              setMovies(movies);
            }).catch((err) => console.log(err));
    },[]
  );
  return (
    <>
    <h2 id="movielink">Movies out now!</h2>
      <ul>
        {
            movies.map(movie =>
              <li key={movie.id}>{`${movie.title} | ${movie.rating} | ${movie.genre} | ${movie.timeLength} | ${movie.price}`}</li>
            )
        }
      </ul>
      </>
  );
}

export default MovieList;