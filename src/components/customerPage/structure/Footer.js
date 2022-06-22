import React from "react";

const Footer = () => {

    return (
        <footer className="footer">

    <h3 id="contactlink" className="contactus">Contact Us</h3>
      <p className="contact">If you have any enquiries or issues, please do not hesitate to drop a message below!</p>
            <form className="form">
                <label className="formName">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                />
                <label className="formEmail">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                 />
                <label className="formEnquiry">Enquiry:</label>
                <input 
                    id="enquiry"
                >
                    </input> 

                <input type="submit" value="Submit" />
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
                            <li><a href="#">Cineworld</a></li>
                            <li><a href="#">Vue</a></li>
                            <li><a href="#">Odeon</a></li>
                            <li><a href="#">Showcase</a></li>
                            <li><a href="#">Everyman</a></li>
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

export default Footer;