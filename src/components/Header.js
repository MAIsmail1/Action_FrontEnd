const Header = () =>{
    return(
        <header>
            <img className="logo" src={require("../images/Action-logos.jpeg")} alt="logo"/>
            <nav>
            <ul>
            <a href=""><li>Home</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Movies</li></a>
                <a href=""><li>Staff Sign-in</li></a>
            </ul>
        </nav>
        </header>
    );
}

export default Header;