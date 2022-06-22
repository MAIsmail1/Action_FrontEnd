import { useState } from "react"
import React from "react";
import { useNavigate } from "react-router-dom";

const NewBooking = () => {

    const navigate = useNavigate();

    return(
        <>
        <p></p>
        <table class="book_film_table">
            <tr>
            <h1 class="center_text">Book Now!</h1>
            </tr>
        </table>
        <table class="book_film_table">
            <tr>
                <td>Select Venue</td>
                    <td>
                    <select name="venue" id="venue" required>
                        <option value="cineworld">Cineworld</option>
                        <option value="vue">Vue</option>
                        <option value="odeon">Odeon</option>
                        <option value="showcase">Showcase</option>
                        <option value="everyman">Everyman</option>
                    </select>
                    </td>
                <td>Select Movie</td>
                    <td>
                    <select name="movie" id="movie">
                        <option value="topGun">Top Gun</option>
                    </select>
                    </td>
                <td>Select Time</td>
                    <td>
                    <select name="time" id="time">
                        <option value="16:00">16:00</option>
                    </select>
                    </td>
                <td>
                    <input class="book_movie_button" type="submit" value="Book Now!"/>

                </td>
            </tr>
            
        </table>
        <table class="book_film_table">
            <tr>
                <button class="view_movie_button" onClick={() => { navigate('view_all_movies') }}>View all movies</button>
            </tr>
        </table>
        </>
    )
}

export default NewBooking;