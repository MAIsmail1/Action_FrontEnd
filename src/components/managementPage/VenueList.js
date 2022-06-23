// venueList



import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'



const VenueList = ({listOfVenues}) => {
const [venues, setVenues] = useState([]);

useEffect(() => {
  axios.get('http://127.0.0.1:8080/venue')
    .then(res => {
      const venues = res.data;
      setVenues(venues);
    }).catch((err) => console.log(err));
  }, []
  );

  return(
   <ul>
     <section className="edit-venue-buttons-pages">
      <h1> All Venues:</h1>
      {
        venues.map(venue =>
          <li key={venue.id}>{`${venue.id} | ${venue.name}`}
          </li>
          )
      }
      <a href="javascript:window.history.back();"><button class="view_movie_button">Go Back</button></a>
     </section>
   </ul>
  )
}

export default VenueList;