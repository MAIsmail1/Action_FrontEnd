import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";



const EditMovie = () => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/movies')
           .then(res => {
             const movies = res.data;
             setMovies(movies);
           }).catch((err) => console.log(err));
   },[]
 );

    useEffect(() => {
    axios.post('http://127.0.0.1:8080/movies')
       .then(res => {
         const movies = res.data;
         setMovies(movies);
       }).catch((err) => console.log(err));
    },[]
    );

    useEffect(() => {
        axios.put('http://127.0.0.1:8080//update/movies/{id}')
           .then(res => {
             const movies = res.data;
             setMovies(movies);
           }).catch((err) => console.log(err));
   },[]
 );

 useEffect(() => {
    axios.delete('http://127.0.0.1:8080/movies')
       .then(res => {
         const movies = res.data;
         setMovies(movies);
       }).catch((err) => console.log(err));
},[]
);


    return(
        <>
        <section className="editmovie">
        <h3>Edit Movies</h3>
            <table className="add_film_table">
            <td>View All Movies</td>
            <td>
          <select name="movie" id="movie">
              {
                movies.map(movie => (
                <option key={movie.id}>{` ${movie.title} `}</option>
                ))
              }
          </select>
                    </td>
            </table>
            
            <button type="submit">Add new movie</button>
                    <button type="submit">Edit movie</button>
                    <button type="submit">Delete movie</button>
    
        </section>
        </>
    );
}

export default EditMovie;