import Movie from "./Movie";
import React from "react";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
    <p></p>
    <table class="view_all_films_table">
      <tr>
        <th>Movie Name</th>
        <th>Genre</th>
        <th>Duration</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>
          <ul>
          {
              movies.map(movie =>
                <li key={movie.id}>{`${movie.title}`}</li>
              )
          }
          </ul>
        </td>
        <ul>
          {
              movies.map(movie =>
                <li key={movie.id}>{`${movie.genre}`}</li>
              )
          }
          </ul>
        <td>
        <ul>
          {
              movies.map(movie =>
                <li key={movie.id}>{`${movie.time_length} minutes`}</li>
              )
          }
          </ul>
        </td>
        <td>
        <ul>
          {
              movies.map(movie =>
                <li key={movie.id}>{`£${movie.price}`}</li>
              )
          }
          </ul>
        </td>
        <td>

        </td>
      </tr>


    </table>

    <table class="view_all_films_table_button">
      <tr>
        <td>
        <a href="javascript:window.history.back();"><button class="view_movie_button">Go Back</button></a>
        </td>
      </tr>
    </table>

      
  </>
  );
}

export default MovieList;