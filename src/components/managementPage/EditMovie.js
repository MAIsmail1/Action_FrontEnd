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
        
        <h2>Edit Movies</h2>
            
            
            <table className="add_film_table">
              <tr>
              <td><button class="view_movie_button" onClick={() => { navigate('view_all_movies') }}>View all movies</button>
              </td>
                <td><button class="view_movie_button" type="submit" onClick={() => { navigate('add_new_movie',{replace:true}) }}>Add new movie</button>
                  </td>
                <td><button class="view_movie_button" type="submit" onClick={() => {navigate('edit_movie')}}>Edit movie</button>
             </td>
                <td><button class="view_movie_button" type="submit">Delete movie</button></td>
                
              </tr>
            </table>
                   
    
        
        </>
    );
}

export default EditMovie;