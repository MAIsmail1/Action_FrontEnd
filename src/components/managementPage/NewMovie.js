import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewMovie = () => {
    const navigate = useNavigate();

    const [movie, setMovies] = useState([]);
    
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState('');
    const [time_length, setTime_Length] = useState(0);
    const [price, setPrice] = useState(0);


    const handleTitleChange = event => setTitle(event.target.value);
    const handleRatingChange = event => setRating(event.target.value);
    const handleGenreChange = event => setGenre(event.target.value);
    const handleTimeLengthChange = event => setTime_Length(event.target.value);
    const handlePriceChange = event => setPrice(event.target.value);
    // handleButtonClick(NewMovie)
    const handleSubmit = event =>{
    event.preventDefault();

    const movie = {
    "title":title,
    rating:rating,
    "genre":genre,
    time_length:time_length,
    price:price
}


axios.post('http://127.0.0.1:8080/movies', {movie})
.then(res => {
  console.log(res);
}).catch((err) => console.log(err));
}

    
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <label>Title:
        <input type="title" name="title" onChange={handleTitleChange}/>
        </label>
        <label>Rating:
        <input type="rating" name="rating" onChange={handleRatingChange}/>
        </label>
        <label>Genre:
        <input type="genre" name="genre" onChange={handleGenreChange}/>
        </label>
        <label>Duration:
        <input type="duration" name="time_length" onChange={handleTimeLengthChange}/>
        </label>
        <label>Price:
        <input type="price" name="price" onChange={handlePriceChange}/>
        </label>
        <button type="submit">Add movie</button>
    </form>
    <ul>
    {movie.map(movies => 
      <li key={movies.id}>{`${movies.title}|${movies.rating}|${movies.genre}|${movies.duration}|${movies.price}`}</li>
    )}
    </ul>
    

    </div>
    
    );
}


export default NewMovie;