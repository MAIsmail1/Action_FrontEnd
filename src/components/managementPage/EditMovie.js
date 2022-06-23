import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const EditMovie = () => {
    const navigate = useNavigate();

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
            
            <button type="submit" onClick={() => { navigate('add_new_movie',{replace:true}) }}>Add new movie</button>
                    <button type="submit" onClick={() => {navigate('edit_movie')}}>Edit movie</button>
                    <button type="submit">Delete movie</button>
    
        </section>
        </>
    );
}

export default EditMovie;