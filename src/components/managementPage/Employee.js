import React from "react";

const Employee = () => {

    return(

        <section className="add_film_table-news-emp"> 
            <article>
                
            
                    <div className="newsletter"> 
                        <div className="newsletter-text"> 
                            <h3>Employee of the Month</h3>  
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            
                            <a href="url">click here to read more</a>
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