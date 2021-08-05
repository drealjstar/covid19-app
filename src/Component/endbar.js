import React, { Component } from "react";
import "./endbar.css";
import { Link } from "react-router-dom";


class Endbar extends Component {
    render() {
        return (
            <div className="end_bar">

                <Link to="/contact" className="contact2">
                    <p className="con">CONTACT</p>
                </Link>

                <Link to="/about" className="about2">
                    <p className="abo">ABOUT</p>
                </Link>

                <Link to="/policy" className="policy2">
                    <p className="pol">POLICY</p>
                </Link>

                <Link to="/directory" className="directory2">
                    <p className="dir">DIRECTORY</p>
                </Link>

            </div>
        );
    }
}


export default Endbar;