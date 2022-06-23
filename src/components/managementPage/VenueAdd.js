import { useState } from "react";
import axios from "axios";
import React from "react";
import VenueList from "./VenueList";

const VenueAdd = () => {

  const [name, setName] = useState('');


  const handleNameChange = event => setName(event.target.value);


  const handleSubmit = event => {
   event.preventDefault();

   const venue = {
     "name": name,
   }

   axios.post('http://127.0.0.1:8080/venue', venue) // axios gets post from web & connects to book
    .then(res => { // return response from web
      console.log(res); // print our response i.e. new book added 
    }).catch((err) => console.log(err)); // error msg if something goe wrong
 }

  return(
    <> 
      <section className="edit-venue-buttons-pages"> 
        <div>
          <h1>Edit Venue: </h1>
          <form onSubmit={handleSubmit}>

            <label>
              Name:
              <input 
              type="text" 
              name="name" 
              onChange={handleNameChange}
              />
            </label>

            <button type="submit">Add New Venue</button>

          </form>

          <section>
            <VenueList/>
          </section>

        </div>
     </section>
</>


  )
}

export default VenueAdd;