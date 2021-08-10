import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./about.css";

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="about_link">
                    <Link to="/" className="stat3">
                        <p className="stat">HOME</p>
                    </Link>

                    <Link to="/contact" className="contact4">
                        <p className="con">CONTACT</p>
                    </Link>

                    <Link to="/policy" className="policy4">
                        <p className="pol">POLICY</p>
                    </Link>

                    <Link to="/services" className="services4">
                        <p className="ser">SERVICES</p>
                    </Link>
                </div>

                <div className="intro">

                    <p>Our Organization Dasent Health Centre the organizer of Dasent Covid-19 Centre </p>
                    <p>specialises in health care provision. providing adequate support to the people </p>
                    <p>with health challenges.</p>
                </div>

                <div className="vision">
                    <h2>Vision</h2>
                    <p>To be the greatest private health care organization with the highest Medical Facilities,</p>
                    <p>To create and improve medical environment to the safety of human. And get to the level of</p>
                    <p>government own hospitals.</p>
                </div>

                <div className="mission">
                    <h2>Mission</h2>
                    <p>We have provide the necessary and adquate equipments, highly qualified staffs for current </p>
                    <p>success, which as well guarantee more success years to come. The organization made it</p>
                    <p>relevant aim and objective, regular assessesment to measure the rate of growth over time. </p>
                </div>

            </div>
        );
    }
}

export default About;