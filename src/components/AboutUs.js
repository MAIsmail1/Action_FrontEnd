import React from "react";

const AboutUs = () => {

    return(
        <aside>
            <h3>The best place to book your experience</h3>
            <p className="aboutus">Action was founded in 2022 and is now the leading movie application group in Europe.
               Action aims to be the best place to book a movie by offering an unparalleled cinema
               experience in the UK, in collaboration with the 5 leading cinema groups in Cineworld,
               Vue, Odeon, Showcase and Everyman.
            </p>

            <img className="image" src={require("../images/Cinema.jpeg")} alt="cinema" />


        </aside>





    );
}

export default AboutUs;