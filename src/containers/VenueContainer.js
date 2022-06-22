import UpdateVenue from "../components/UpdateVenue";
import NewVenue from "../components/NewVenue";
import MovieList from "../components/MovieList";
import React from "react";
import VenueList from "../components/VenueList";
import TimetableList from "../components/TimetableList";

const VenueContainer = () => {


    return(
        <>
             {/* <UpdateVenue/>
            <NewVenue/> */}
             <MovieList/>
            <VenueList />
            <TimetableList />
             
        </>
    )
}

export default VenueContainer;