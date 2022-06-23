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
        <h2>Edit Movies</h2>
         <table className="edit_tables">
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

            <table className="add_film_table">
              <tr>
              <td>
                <button class="view_movie_button" type="submit" onClick={() => { navigate('add_new_movie',{replace:true}) }}>Add new movie</button>
                </td>
                <td>
                <button class="view_movie_button" type="submit" onClick={() => {navigate('edit_movie')}}>Edit Movie</button>
                </td>
                <td>
                <button class="view_movie_button" type="submit">Delete movie</button>
                </td>
              </tr>
            </table>
            </section>
                   
    
        
        </>
    );
}

export default EditMovie;