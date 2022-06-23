
import { useState } from "react";
import axios from "axios";
import React from "react";
import NewVenue from "./NewVenue";

const VenueAdd = () => {

  const[venue,setVenues] = useState([]);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [timetable, setTimetable] = useState('');


  const handleIdChange = event => setId(event.target.value);
  const handleNameChange = event => setName(event.target.value);
  const handleTimetableChange = event => setTimetable(event.target.value);


  const handleSubmit = event => {
   event.preventDefault();

   const venue = {
     "id": id,
     "name": name,
     "timetable": timetable
   }

   axios.post('http://127.0.0.1:8080/venue', venue) // axios gets post from web & connects to venue
    .then(res => { // return response from web
      console.log(res); // print our response i.e. new venue added 
    }).catch((err) => console.log(err)); // error msg if something goe wrong
 }

  return(
    <div>

    <h1> Add Venue </h1>

    <form>

        <label>
          Id:
          <input 
          type="number" 
          name="id" 
          />
        </label>

        <label>
          Name:
          <input 
          type="text" 
          name="name" 
          />
        </label>


        <label>
          Timetable:
          <input 
          type="text" 
          name="timetable" 
          />
        </label>

      <button type="submit">Add New Venue</button>

      </form>

      <ul>
        {/* {
       venue.map(venue =>
        <li key={venue.id}>{`${venue.id} | ${venue.name} | ${venue.timetable}`}
        </li> 
       )
       } */}
      </ul>

</div>
  )
}

export default VenueAdd;