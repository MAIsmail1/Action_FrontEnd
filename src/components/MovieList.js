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
      <ul>
        {
            movies.map(movie =>
              <li key={movie.id}>{`Movie: ${movie.title} | Reviews: ${movie.rating} | Genre: ${movie.genre} | Duration: ${movie.time_length} minutes | Price: ${movie.price}`}</li>
            )
        }
      </ul>
  );
}

export default MovieList;