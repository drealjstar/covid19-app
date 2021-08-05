import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./directory.css";

class Directory extends Component {
    render() {
        return (
            <div className="directory">
                <Link to="/" className="stat5">
                    <p className="stat">HOME</p>
                </Link>

                <Link to="/contact" className="contact6">
                    <p className="con">CONTACT</p>
                </Link>

                <Link to="/about" className="about6">
                    <p className="abo">ABOUT</p>
                </Link>

                <Link to="/policy" className="policy6">
                    <p className="pol">POLICY</p>
                </Link>

            </div>
        );
    }
}

export default Directory;