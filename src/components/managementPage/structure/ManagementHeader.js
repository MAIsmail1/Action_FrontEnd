import React from "react";

const ManagementHeader = () => {


    return(
        <header>
           <img className="logo" src={require("../../../images/Action-logos.jpeg")} alt="logo" />
            

               
                <div > 
                <section className="management-header"> 
                    <nav>
                        <ul>
                        <a href="javascript:window.history.back();"><button class="view_movie_button">Go Back</button></a>
                            <a href=""><li>Home</li></a>
                            <a href=""><li>Edit Movies</li></a>
                            <a href=""><li>Edit Venues</li></a>
                            <a href=""><li>Edit Timetable</li></a>
                            <input id="searchmov" type="text" placeholder="Search..." name="search"/>
                <button className="view_movie_button" type="submit">Search</button>
                        </ul>
                    </nav>
                    </section>
                </div>
        </header>
    )

}    
export default ManagementHeader;
