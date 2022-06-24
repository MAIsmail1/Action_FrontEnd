import React from "react";

const MonthlyNewsletter = () => {

    return(

        
                
        <table className="add_film_table-news-emp">
            <tr>
                <td>
                <div className="newsletter"> 
                        <div className="newsletter-text"> 
                            <h3> Action Newsletter - June'22</h3>  
                            A monthly update on Action news and events     <a className="link-news" href="url">click here to read full Newsletter</a>
                            
                        </div>
                        <div className="newsletter-image"> 
                        <img className="newsletter-img" src={require("../../images/Newsletter.webp")} alt="newsletter"/> 
                        </div>
                        
                    </div>
                </td>
            </tr>
        </table>
                
            
            

    );
}

export default MonthlyNewsletter;