import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const EditButton = () => {
    const [venues, setVenues] = useState([]);

useEffect(() => {
  axios.get('http://127.0.0.1:8080/venue')
    .then(res => {
      const venues = res.data;
      setVenues(venues);
    }).catch((err) => console.log(err));
  }, []
  );

    const navigate = useNavigate();
    return (
        
                <section className="editmovie">
                <h3>Edit Venues</h3>
                    <table className="add_film_table">
                    <td>View All Venues:</td>
                    <td>
                  <select name="venue" id="venue">
                                {
                    venues.map(venue =>
                        <option key={venue.id}>{`${venue.id} | ${venue.name}`} 
                        </option>
                        )
                    }
                  </select>
                            </td>
                    </table>
                   <ul className="venue_buttons">
                    
                    <a href="" onClick={() => { navigate('list-of-venue') }} ><button>Venue Timetable</button></a>

                    <a href="" onClick={() => { navigate('add-venue') }} ><button>Add Venue </button></a>
                    <a href="" onClick={() => { navigate('edit-venue') }} ><button>Edit Venue </button></a>
                    <a href="" onClick={() => { navigate('edit-venue') }} ><button>Delete Venue </button></a>

                </ul>
            
                </section>
     
    );
           
}

export default EditButton;