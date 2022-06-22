import React from "react";

const TopFilms = () => {

return(

    <>
    <p></p>
    <table class="book_film_table">
        <tr><td><h1 class="center_text">Top Films</h1></td></tr>
    </table>

    <table class="top_film_table">
        <tr>
            <td><img className="zoom_image" src={require("../images/Elvis.jpeg")} alt="Elvis" width="50%" /> </td>
            <td><img className="zoom_image" src={require("../images/Freedom.jpeg")} alt="Freedom" width="50%" /></td>
            <td><img className="zoom_image" src={require("../images/Jurassic_World.jpeg")} alt="Jurassic World" width="50%" /></td>
        </tr>
        <tr>
            <td><img className="zoom_image" src={require("../images/Top_Gun.jpeg")} alt="Top Gun" width="50%" /></td>
            <td><img className="zoom_image" src={require("../images/Everything.jpeg")} alt="Everything" width="50%" /></td>
            <td><img className="zoom_image" src={require("../images/Thor.jpeg")} alt="Thor" width="50%" /></td>
        </tr>
    </table>
    </>

)


}

export default TopFilms;