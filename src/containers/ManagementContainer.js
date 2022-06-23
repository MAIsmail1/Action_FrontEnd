import UpdateVenue from "../components/managementPage/UpdateVenue";
import NewVenue from "../components/managementPage/NewVenue";
import MovieList from "../components/customerPage/MovieList";
import MonthlyNewsletter from "../components/managementPage/MonthlyNewsletter";
import React from "react";
import Footer from "../components/customerPage/structure/Footer";
import ManagementHeader from "../components/managementPage/structure/ManagementHeader";
<<<<<<< HEAD
import VenueList from "../components/managementPage/VenueList";
import VenueAdd from "../components/managementPage/VenueAdd";
import { useState  } from "react"

=======
import EditMovie from "../components/managementPage/EditMovie";
>>>>>>> 6e98688fdf87fa43d2c676578e688aac8002c021
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
<<<<<<< HEAD
             <VenueList listOfVenues={venue}/>
             <VenueAdd/>
=======
             <EditMovie />
>>>>>>> 6e98688fdf87fa43d2c676578e688aac8002c021
             <Footer/>


        </>
    )
}

export default ManagementContainer;