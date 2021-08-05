import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./about.css";

class About extends Component {
    render() {
        return (
            <div className="about">

                <Link to="/" className="stat3">
                    <p className="stat">HOME</p>
                </Link>

                <Link to="/contact" className="contact4">
                    <p className="con">CONTACT</p>
                </Link>

                <Link to="/policy" className="policy4">
                    <p className="pol">POLICY</p>
                </Link>

                <Link to="/directory" className="directory4">
                    <p className="dir">DIRECTORY</p>
                </Link>

            </div>
        );
    }
}

export default About;