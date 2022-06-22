import React from "react";

const ManagementHeader = () => {


    return(
        <header>
            <img className="logo" src={require("../images/Action-logos.jpeg")} alt="logo" />
            <h1>Management Page</h1>

                <br/>
                <br/>
                <br/>

                <nav>
                    <ul>
                        <a href=""><li>Home</li></a>
                        <a href=""><li>Edit Movies</li></a>
                        <a href=""><li>Edit Venues</li></a>
                        <a href=""><li>Edit Timetable</li></a>
                        <input id="searchmov" type="text" placeholder="Search..." name="search"/>
                <button className="searchbutton" type="submit">Search</button>
                    </ul>
                </nav>

        </header>
    )

}    
export default ManagementHeader;
