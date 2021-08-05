import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Link to="/" className="stat2">
                    <p className="stat">HOME</p>
                </Link>

                <Link to="/about" className="about3">
                    <p className="abo">ABOUT</p>
                </Link>

                <Link to="/policy" className="policy3">
                    <p className="pol">POLICY</p>
                </Link>

                <Link to="/directory" className="directory3">
                    <p className="dir">DIRECTORY</p>
                </Link>

            </div>
        );
    }
}

export default Contact;