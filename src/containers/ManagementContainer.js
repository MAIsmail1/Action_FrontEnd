// managementContainer

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

import EditMovie from "../components/managementPage/EditMovie";
import NewMovie from "../components/managementPage/NewMovie";
import EditButton from "../components/managementPage/EditButton";
import ManagementFooter from "../components/managementPage/structure/ManagementFooter";
import Employee from "../components/managementPage/Employee";
// import './App.css';

const ManagementContainer = () => {

    const [venue, setVenues] = useState([]);


    return(
        <>
            <ManagementHeader/>
            <MonthlyNewsletter/>
             <Employee/>            
             <EditButton/>
             <EditMovie />             
             <ManagementFooter/>

        </>
    )
}

export default ManagementContainer;