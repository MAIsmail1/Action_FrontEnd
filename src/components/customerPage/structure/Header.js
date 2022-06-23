import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    return (
        <header className="customer-nav-bar">
            <img className="logo" src={require("../../../images/Action-logos.jpeg")} alt="logo" />



            {/* Action title with picture of take */}
            
            <nav>
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>About</li></a>
                    <a href=""><li>Contact Us</li></a>
                    <a href=""><li>Movies</li></a>
                    <a href="" onClick={() => { navigate('employee-login') }} ><li>Employee Login</li></a>
                    {/* <a href="" onClick={() => { navigate('booking') }} ><li>Booking</li></a> */}
                    <input id="searchmov" type="text" placeholder="Search..." name="search"/>
                <button className="searchbutton" type="submit">Submit</button>
                    {/* Search bar */}
                </ul>
            </nav>
        </header>
    );
           
}

export default Header;