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

    // <section className="add_film_table">
    // <h3>Edit Venues</h3>
    //     <table className="add_film_table">
    //     <td>View All Venues:</td>
    //     <td>
    //   <select name="venue" id="venue">
    //                 {
    //     venues.map(venue =>
    //         <option key={venue.id}>{`${venue.id} | ${venue.name}`} 
    //         </option>
    //         )
    //     }
    //   </select>
    //             </td>
    //     </table>
    <>




      <section className="editmovie">
        <h2>Edit Venues</h2>
        <table className="edit_tables">
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
      <table className="add_film_table">
        <tr>
      <td>
              <a href="" onClick={() => { navigate('add-venue') }} ><button class="view_movie_button">Add new Venue </button></a>
                 </td>
                    <td>                    
                 <a href="" onClick={() => { navigate('edit-venue') }} ><button class="view_movie_button">Edit Venue </button></a>
                    </td>
                        <td>                    
                          <a href="" onClick={() => { navigate('edit-venue') }} ><button class="view_movie_button">Delete Venue </button></a>
                        </td>     
                      </tr>
                    </table>
      
      </section>


    </>


    // </section>

  );

}

export default EditButton;