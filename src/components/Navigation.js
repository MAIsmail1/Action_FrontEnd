import React from "react";

const Navigation = () => {
    return(
        <>
        
        {/* Action title with picture of take */}
        <h1>Action</h1>
        <nav>
            <ul>
            <a href=""><li>Home</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Movies</li></a>
                <a href=""><li>Staff Sign-in</li></a>
                <input type="text" placeholder="Search for Movie"/>
                <button type="submit">Search</button>
                {/* Search bar */}
            </ul>
        </nav>
        </>
    )

}

export default Navigation;