import React from "react";

const BookingConfirmation = () => {


    return(
        <>
            
            <p></p>
    <table class="book_film_table">
        <tr><td><h1 class="center_text">Your booking has been confirmed!</h1></td></tr>
    </table>
    <table class="view_all_films_table_button">
      <tr>
        <td>
        <a href="javascript:window.history.back();"><button class="view_movie_button">Go Back</button></a>
        </td>
      </tr>
    </table>

        </>
    )
}

export default BookingConfirmation;