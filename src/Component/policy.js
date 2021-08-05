import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./policy.css";

class Policy extends Component {
    render() {
        return (

            <div className="policy">
                <Link to="/" className="stat4">
                    <p className="stat">HOME</p>
                </Link>

                <Link to="/contact" className="contact5">
                    <p className="con">CONTACT</p>
                </Link>

                <Link to="/about" className="about5">
                    <p className="abo">ABOUT</p>
                </Link>

                <Link to="/directory" className="directory5">
                    <p className="dir">DIRECTORY</p>
                </Link>


            </div>
        );
    }
}

export default Policy;