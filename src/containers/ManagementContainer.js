import UpdateVenue from "../components/managementPage/UpdateVenue";
import NewVenue from "../components/managementPage/NewVenue";
import MovieList from "../components/customerPage/MovieList";
import MonthlyNewsletter from "../components/managementPage/MonthlyNewsletter";
import React from "react";
import Footer from "../components/customerPage/structure/Footer";
import ManagementHeader from "../components/managementPage/structure/ManagementHeader";
import VenueList from "../components/managementPage/VenueList";
import VenueAdd from "../components/managementPage/VenueAdd";
import { useState  } from "react"

// import './App.css';

const ManagementContainer = () => {

    const [venue, setVenues] = useState([]);


    return(
        <>
            <ManagementHeader/>
             {/* <UpdateVenue/>
            <NewVenue/> */}
             {/* <MovieList/> */}
             <MonthlyNewsletter/>
             <VenueList listOfVenues={venue}/>
             <VenueAdd/>
             <Footer/>


        </>
    )
}

export default ManagementContainer;