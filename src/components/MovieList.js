import Movie from "./Movie";
import React from "react";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from "@testing-library/react";

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

  //for(var i = 0;i<20;i++){
    return (
        <div>
          <h3 id="movielink">Select Movie</h3>
           <select>
                  
              {
                movies.map(movie => (
                <option key={movie.id}>{` ${movie.title} `}</option>
                ))
              }
          
          </select>
          </div>
      );
    }
  //}
  

export default MovieList;
// | Reviews: ${movie.rating} | Genre: ${movie.genre} 
//                 | Duration: ${movie.time_length} minutes | Price: ${movie.price}
