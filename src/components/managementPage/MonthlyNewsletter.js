import React from "react";

const MonthlyNewsletter = () => {

    return(

        
                
        <table className="add_film_table">
            <tr>
                <td>
                <div className="newsletter"> 
                        <div className="newsletter-text"> 
                            <h3>Monthly Action Newsletter</h3>  
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?

                            <a href="url">click here to read more</a>
                        </div>
                        <div className="newsletter-image"> 
                        <img className="newsletter-img" src={require("../../images/Newsletter.webp")} alt="newsletter"/> 
                        </div>
                        <hr />
                    </div>
                </td>
            </tr>
        </table>
                
            
            

    );
}

export default MonthlyNewsletter;