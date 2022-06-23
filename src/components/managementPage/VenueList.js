

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
     {
       venues.map(venue =>
        <li key={venue.id}>{'${venue.id} | ${venue.title} | ${venue.timetable}'}</li>
        )
     }
   </ul>
  )
}

export default VenueList;