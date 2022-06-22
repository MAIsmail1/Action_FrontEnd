import axios from "axios";
import { useState } from "react"
import React from "react";


const VenueAdd = () => {
    const [name, setName] = useState("");
    
}

const handleNameChange = event => setName(event.target.value);


const handleSubmit = event =>{
    event.preventDefault();

const venue = {
    "name":name,
    
}

axios.post('http://127.0.0.1:8080/venue/name',{venue})
.then(res => {
    console.log(res);
}).catch((err) => console.log(err));
}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>Venue name:
            <input type="text" name="name" onChange={handleNameChange}/>
            </label>
            
            <button type="submit">Add venue</button>
        </form>
    </div>
)

export default VenueAdd;