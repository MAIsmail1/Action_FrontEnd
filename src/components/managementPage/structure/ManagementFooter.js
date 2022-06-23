import React from "react";


const ManagementFooter = () => {

    return (
        <footer className="footer">

    <h3 id="contactlink" className="contactus">Contact IT</h3>
      <p className="contact">If you have any enquiries or issues, please do not hesitate to contact IT below!</p>
            <form className="form">
            <pre>
                <label className="formName">Name:</label>
                <input 
                    type="name" 
                    id="name"
                    placeholder="eg. John Evans"
                />
                <label className="formEmail">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Please Use Staff Email"
                 />
                 
                <label className="formEnquiry">Enquiry:</label>
                <input 
                    id="enquiryit"
                    placeholder="Please describe your issue here..."
                    
                >
                    </input> 
                    
                <input type="submit" value="Submit" />
                </pre>
            </form>
                <div className="container">
                    <div className="row">
                    <div className="footer-col" >
                        <h4>Action</h4>
                        <ul>

                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Copyright</a></li>
                            <li><a href="#">Last Updated</a></li>
                        </ul>
                        </ div>

                    <div className="footer-col">
                        <h4>Venues</h4>
                        <ul>
                            <li><a href="https://www.cineworld.co.uk/">Cineworld</a></li>
                            <li><a href="https://www.myvue.com/">Vue</a></li>
                            <li><a href="https://www.odeon.co.uk/">Odeon</a></li>
                            <li><a href="https://www.showcasecinemas.co.uk/">Showcase</a></li>
                            <li><a href="https://www.everymancinema.com/">Everyman</a></li>
                        </ul>
                    </ div>

                    <div className="footer-col">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Refunds</a></li>
                            <li><a href="#">Complaints</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
  	 			        <h4>Social media links</h4>
  	 			        <ul>
  	 				        <li><a href="#">Facebook</a></li>
  	 				        <li><a href="#">Twitter</a></li>
  	 				        <li><a href="#">Instagram</a></li>
                       </ul>
  	 			    </div>

                </div>
            </div>
        </footer>
    );

}

export default ManagementFooter;