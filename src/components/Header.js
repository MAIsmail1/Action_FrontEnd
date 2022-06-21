import React from "react";

const Header = () =>{
    return(
        <header>
            <img className="logo" src={require("../images/Action-logos.jpeg")} alt="logo"/>
        
        
        
        {/* Action title with picture of take */}
        <nav>
            <ul>
            <div className="search">
            <a href=""><li>Home</li></a>
                <a href="#aboutlink"><li>About</li></a>
                <a href="#contactlink"><li>Contact Us</li></a>
                <a href="#movielink"><li>Movies</li></a>
                <a href=""><li>Staff Sign-in</li></a>
                <input id="searchmov" type="text" placeholder="Search for Movie"/>
                <button className="searchbutton" type="submit">Search</button>
                </div>
                {/* Search bar */}
            </ul>
        </nav>
        </header>
    );
}

export default Header;