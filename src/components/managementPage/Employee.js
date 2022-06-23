import React from "react";

const Employee = () => {

    return(

        <section className="add_film_table-news-emp"> 
            <article>
                
            
                    <div className="newsletter"> 
                        <div className="newsletter-text"> 
                            <h3>Employee of the Month</h3>  
                            Action encourages this kind of skills and behavior, so we are naming you our Employee of the Month! Congratulations! Thank you so much for showing us that hard work and thoughtful leadership wins the race. Thank you once more for being an amazing leader!                            
                        </div>
                        <div className="newsletter-image"> 
                        <img className="employee-img" src={require("../../images/employee.png")} alt="employee"/> 
                        </div>
                        
                    </div>
                
            
            </article>
        </section>

    );
}

export default Employee;