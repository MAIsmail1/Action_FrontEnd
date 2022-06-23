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
    <h1> Venue List</h1>
     {
       venues.map(venue =>
        <li key={venue.id}>{`${venue.id} | ${venue.name}`} <button type="submit">Show Timetable</button>
        </li> 
        
        // .timetable.map(timetable =>
        //   <li key={timetable.id}>{`${timetable.id} | ${timetable.date} | ${timetable.time}`} 
        //   </li>
          )
      }
   </ul>
  )
}

export default VenueList;