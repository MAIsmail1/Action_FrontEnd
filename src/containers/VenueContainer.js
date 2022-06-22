import UpdateVenue from "../components/UpdateVenue";
import NewVenue from "../components/NewVenue";
import MovieList from "../components/MovieList";
import MonthlyNewsletter from "../components/MonthlyNewsletter";
import React from "react";

const VenueContainer = () => {


    return(
        <>
            <h1>Venue Container</h1>
             {/* <UpdateVenue/>
            <NewVenue/> */}
             <MovieList/>
             <MonthlyNewsletter/>


        </>
    )
}

export default VenueContainer;