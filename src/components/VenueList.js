import Movie from "./Movie";
import React from "react";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from "@testing-library/react";

const VenueList = () => {
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

    

  return (
    <>
    <h3>Choose your venue:</h3>
        <select>
        {
         
            venues.map((venue, index) =>
              // <li key={venue.id}>{`Venue: ${venue.name} |`}</li>
              
              <>
              <option key={index}>{` ${venue.name} `}</option>
              </>
              
            )
            
        }
        </select>
        </>
  );
}

export default VenueList;