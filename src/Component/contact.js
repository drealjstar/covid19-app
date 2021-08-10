import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";


class Contact extends Component {

render() {
        return (
            <div className="contact">
            <div className="contact_info_list">
                <Link to="/" className="stat2">
                    <p className="stat">HOME</p>
                </Link>
                
                <Link to="/about" className="about3">
                    <p className="abo">ABOUT</p>
                </Link>
                
                <Link to="/policy" className="policy3">
                    <p className="pol">POLICY</p>
                </Link>

                <Link to="/services" className="services3">
                    <p className="ser">SERVICES</p>
                </Link>
                 </div>
                <div className="contact_info">
                <div className="contact_details">
                <h2>Dasent Covid-19 Centre</h2>
                <p>234 Lekki Express Way, Opposite Manbas Complex </p>
                <p>Lekki Ajah, Lagos.</p>
                <p>website : www.dasenthealthcare.com</p>
                <p>Email : dasentcentre@gmail.com</p>
                <p>Phone : +2348012345678</p>
                 </div>
                <div className="contact_image"></div>
        </div>
        </div>
     );
    }
}

export default Contact;