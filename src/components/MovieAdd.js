import axios from "axios";
import { useState } from "react"
import React from "react";


const MovieAdd = () => {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState("");
    const [time_length, setTime_Length] = useState(0);
    const [price, setPrice] = useState(0);
    const [timetables, setTimetables] = useState("");
}

const handleTitleChange = event => setTitle(event.target.value);
const handleRatingChange = event => setRating(event.target.value);
const handleGenreChange = event => setGenre(event.target.value);
const handleTimeLengthChange = event => setTime_Length(event.target.value);
const handlePriceChange = event => setPrice(event.target.value);
const handleTimetablesChange = event => setPrice(event.target.value);

const handleSubmit = event =>{
    event.preventDefault();

const movie = {
    "title":title,
    rating:rating,
    "genre":genre,
    time_length:time_length,
    price,price
}

axios.post('http://127.0.0.1:8080/movies',{movie})
.then(res => {
    console.log(res);
}).catch((err) => console.log(err));
}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title:
            <input type="text" name="title" onChange={handleTitleChange}/>
            </label>
            <label>Review:
            <input type="text" name="rating" onChange={handleRatingChange}/>
            </label>
            <label>Genre:
            <input type="text" name="genre" onChange={handleGenreChange}/>
            </label>
            <label>Duration:
            <input type="text" name="time_length" onChange={handleTimeLengthChange}/>
            </label>
            <label>Price:
            <input type="text" name="price" onChange={handlePriceChange}/>
            </label>
            <label>Timings:</label>
            <input type="text" name="timetables" onChange={handleTimetablesChange}/>
            <button type="submit">Add movie</button>
        </form>
    </div>
)

export default MovieAdd;