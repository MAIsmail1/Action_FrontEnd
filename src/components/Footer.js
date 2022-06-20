import React from "react";

const Footer = () => {

    return (
        <footer className="footer">

    <h3 className="contactus">Contact Us</h3>
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
                <textarea 
                    id="textarea" 
                    rows="4"
                    column="30"
                >
                    </textarea> 

                <input type="submit" value="Submit" />
            </form>

            <div className="container">
                <div className="row">
                    <div className="footer-col" id="foot">
                        <h4>Action</h4>
                        <ul>
                            <li><a href=""></a>Social Media Links</li>
                            <li><a href=""></a>Legal</li>
                            <li><a href=""></a>Copyright</li>
                            <li><a href=""></a>Last Updated</li>
                        </ul>
                        </ div>

                    <div className="footer-col" id="foot1">
                        <h4>Venues</h4>
                        <ul>
                            <li><a href=""></a>Cineworld</li>
                            <li><a href=""></a>Vue</li>
                            <li><a href=""></a>Odeon</li>
                            <li><a href=""></a>Showcase</li>
                            <li><a href=""></a>Everyman</li>
                        </ul>
                    </ div>

                    <div className="footer-col" id="foot2">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Refunds</a></li>
                            <li><a href="">Complaints</a></li>
                        </ul>
                    </ div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;