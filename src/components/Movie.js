import React from "react";

const Movie = ({movie}) => {

    const {movieName, rating, genre, timeLength, price} = movie

    return(
        <>
        <p>Movie Details:</p>
        <p>Movie Title: {movieName}</p>
        <p>Rating: {rating}</p>
        <p>Category: {genre}</p>
        <p>Duration: {timeLength}</p>
        <p>Cost: {price}</p>
        </>
    )

}

export default Movie;