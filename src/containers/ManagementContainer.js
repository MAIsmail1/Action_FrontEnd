import UpdateVenue from "../components/managementPage/UpdateVenue";
import NewVenue from "../components/managementPage/NewVenue";
import MovieList from "../components/customerPage/MovieList";
import MonthlyNewsletter from "../components/managementPage/MonthlyNewsletter";
import React from "react";
import Footer from "../components/customerPage/structure/Footer";
import ManagementHeader from "../components/managementPage/structure/ManagementHeader";
// import './App.css';

const ManagementContainer = () => {


    return(
        <>
            <ManagementHeader/>
             {/* <UpdateVenue/>
            <NewVenue/> */}
             {/* <MovieList/> */}
             <MonthlyNewsletter/>
             <Footer/>


        </>
    )
}

export default ManagementContainer;