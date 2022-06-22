import UpdateVenue from "../components/UpdateVenue";
import NewVenue from "../components/NewVenue";
import MovieList from "../components/MovieList";
import MonthlyNewsletter from "../components/MonthlyNewsletter";
import React from "react";
import Footer from "../components/Footer";
import ManagementHeader from "../components/ManagementHeader";

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