import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieList from "../customerPage/MovieList";

const NewMovie = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState();
    const [genre, setGenre] = useState('');
    const [time_length, setTime_Length] = useState();
    const [price, setPrice] = useState();


    const handleTitleChange = event => setTitle(event.target.value);
    const handleRatingChange = event => setRating(event.target.value);
    const handleGenreChange = event => setGenre(event.target.value);
    const handleTimeLengthChange = event => setTime_Length(event.target.value);
    const handlePriceChange = event => setPrice(event.target.value);
    
    const handleSubmit = event =>{
    event.preventDefault();

    const movie = {
    "title":title,
    rating:rating,
    "genre":genre,
    time_length:time_length,
    price:price
}


axios.post('http://127.0.0.1:8080/movies', movie)
.then(res => {
  console.log(res);
}).catch((err) => console.log(err));
}

    
    return(
      <>
      <section className="newmovie">
        <div>
        <form onSubmit={handleSubmit} className="add_new_movie">
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
        <button type="submit" className="book_movie_button">Add movie</button>
    </form>
    </div>
    </section>
    <section>
      <MovieList />
    </section>

    </>
    );
}


export default NewMovie;