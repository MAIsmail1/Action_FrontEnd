import { useEffect, useState } from "react"
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewBooking = () => {

    const navigate = useNavigate();

    const [venues, setVenues] = useState([]);
 

    useEffect(() => {
            axios.get('http://127.0.0.1:8080/venue/name')
              .then(res => {
                const venues = res.data;
               // res.header("Access-Control-Allow-Origin", "*");
                setVenues(venues);
              }).catch((err) => console.log(err));
      },[]
    );

    const [movies, setMovies] = useState([]);
    
  useEffect(() => {
         axios.get('http://127.0.0.1:8080/movies')
            .then(res => {
              const movies = res.data;
             // res.header("Access-Control-Allow-Origin", "*");
              setMovies(movies);
            }).catch((err) => console.log(err));
    },[]
  );

  const [timetables, setTimeTables] = useState([]);
 

  useEffect(() => {
          axios.get(`http://127.0.0.1:8080/timetable`)
            .then(res => {
              const timetables = res.data;
             // res.header("Access-Control-Allow-Origin", "*");
              setTimeTables(timetables);
            }).catch((err) => console.log(err));
    },[]
  );

    return(
        <section>
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
                {
                venues.map((venue, index) =>
              <>
              <option key={index}>{` ${venue.name} `}</option>
              </>
            )
        }
        </select>
                    </td>
                <td>Select Movie</td>
            <td>
          {/* <h3 id="movielink">Select Movie</h3> */}
          <select name="movie" id="movie">
              {
                movies.map(movie => (
                <option key={movie.id}>{` ${movie.title} `}</option>
                ))
              }
          </select>
                    </td>
                    </tr>
                    <tr>
        
                    <td>Select Day</td>
                    <td>
                    {/* <select name="time" id="time">
                        <option value="16:00">16:00</option>
                    </select> */}

                <select name="date" id="day">
        {
         
            timetables.map((time, index) =>
              // <li key={venue.id}>{`Venue: ${venue.name} |`}</li>
              
              <>
              <option key={index}>{` ${time.date} `}</option>
              </>
              
            )
            
        }
        </select>

                    </td>

                <td>Select Time</td>
                    <td>
                    {/* <select name="time" id="time">
                        <option value="16:00">16:00</option>
                    </select> */}

                <select name="time" id="time">
                {
                    timetables.map((time, index) =>       
              <>
              <option key={index}>{` ${time.time} `}</option>
              </>
            )
        }
        </select>
        </td>

        
                
            </tr>
            
        </table>
        <table class="book_film_table">
          <tr><td></td></tr>
            <tr>
              <td>
              <button class="view_movie_button" onClick={() => { navigate('confirmation') }}>Book Movie</button>

              </td>
              </tr>
              <tr><td></td></tr>
              <tr>
              <td>
              <button class="view_movie_button" onClick={() => { navigate('view_all_movies') }}>View all movies</button>

              </td>
              </tr>
            
            <tr>
              <p> </p>
            </tr>
        </table>
        </section>
    )
}

export default NewBooking;