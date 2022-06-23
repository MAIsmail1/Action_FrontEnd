import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    return (
        <header className="customer-nav-bar">
            <img className="logo" src={require("../../../images/Action-logos.jpeg")} alt="logo" />



            {/* Action title with picture of take */}
            <div>
                <section className="management-header">
            <nav>
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href="#aboutlink"><li>About</li></a>
                    <a href="#contactlink"><li>Contact Us</li></a>
                    <a href="#filmlink"><li>Movies</li></a>
                    <a href="" onClick={() => { navigate('employee-login') }} ><li>Employee Login</li></a>
                    {/* <a href="" onClick={() => { navigate('booking') }} ><li>Booking</li></a> */}
                    <input id="searchmov" type="text" placeholder="Search..." name="search"/>
                <button className="view_movie_button" type="submit">Submit</button>
                    {/* Search bar */}
                </ul>
            </nav>
            </section>
            </div>
        </header>
    );
           
}

export default Header;