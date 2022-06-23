import React from "react";

const MonthlyNewsletter = () => {

    return(

        <section className="editmovie"> 
            <article>
                
            
                    <div className="newsletter"> 
                        <div className="newsletter-text"> 
                            <h3>Monthly Action Newsletter</h3>  
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        
                            <a href="url">click here to read more</a>
                        </div>
                        <div className="newsletter-image"> 
                        <img className="newsletter-img" src={require("../../images/Newsletter.webp")} alt="newsletter"/> 
                        </div>
                        <hr />
                    </div>
                
            
            </article>
        </section>

    //     <aside>
    //     <h3>The best place to book your experience</h3>
    //     <p className="aboutus">Action was founded in 2022 and is now the leading movie application group in Europe.
    //        Action aims to be the best place to book a movie by offering an unparalleled cinema
    //        experience in the UK, in collaboration with the 5 leading cinema groups in Cineworld,
    //        Vue, Odeon, Showcase and Everyman.
    //     </p>

    //     <img className="image" src="https://i2-prod.bristolpost.co.uk/incoming/article3308526.ece/ALTERNATES/s810/6_Annoying-cinema-habits.jpg"
    //     alt="cinema" />


    // </aside>

    );
}

export default MonthlyNewsletter;