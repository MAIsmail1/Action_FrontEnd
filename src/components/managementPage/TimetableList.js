import Movie from "./Movie";
import React from "react";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from "@testing-library/react";

const TimetableList = () => {
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

    

  return (
    <>
    <h3>Select Times</h3>
        <select>
        {
         
            timetables.map((time, index) =>
              // <li key={venue.id}>{`Venue: ${venue.name} |`}</li>
              
              <>
              <option key={index}>{` ${time.date} `}</option>
              </>
              
            )
            
        }
        </select>
        <select>
        {
         
            timetables.map((time, index) =>
              // <li key={venue.id}>{`Venue: ${venue.name} |`}</li>
              
              <>
              <option key={index}>{` ${time.time} `}</option>
              </>
              
            )
            
        }
        </select>
        </>
  );
}

export default TimetableList;