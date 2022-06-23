import { useState } from "react";
import axios from "axios";
import React from "react";

const VenueEdit = () => {

    const [id, setId] = useState('');



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

   axios.post('http://127.0.0.1:8080/venue', venue) // axios gets post from web & connects to book
    .then(res => { // return response from web
      console.log(res); // print our response i.e. new book added 
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

</div>
  )
}

export default VenueAdd;