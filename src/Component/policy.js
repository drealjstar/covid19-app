import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./policy.css";

class Policy extends Component {
    render() {
        return (
          <div>
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

                <Link to="/services" className="services5">
                    <p className="ser">SERVICES</p>
                </Link>
                </div>
                <div className="policies">
              <div className="policy_head">
              <h2>Dasent Health Centre Privacy Policy</h2>
              </div>

              <div className= "policy_intro">
              <h2>Introduction</h2>
              <p>We health care organization that currently contribute to the eradication of Covid-19 disease</p>
              <p>across Nigeria, we make use of client personal information for the purpose of rendering adequate services.</p>
              <p>All data generated through our website are kept with our secured mechanism. Our organization never </p>
              <p>disclosed all protected informations of our client to an external bodies. we work at a very higher </p>
              <p>pase to deliver the best. </p>
              </div>

              <div className="responsibility">
             <h2>Who is Responsible for your Personal Data</h2>
             <p>Our organization is responsible for protecting all your personal information you delivered to our website</p>
             <p>as we have pledge to render the best of our services to you. Your personal datas provided to our</p> 
             <p>are been monitored in a professional ways in order to avoid unecessary penetration by third parties.</p>
             </div>

            <div className="data_collection">
            <h2>How we get your Personal Data</h2>
            <p>We are able to get our client personal data through the online forms on our organization website</p>
            <p>We collected personal informations of our client for a professional and functional reasons.</p>
            </div>

            <div className="data_usage">
            <h2>How we use your Personal Data</h2>
            <p>We use the personal datas you provide to make sure we serve you well, by rendering a standard service </p>
            <p>to you.</p> 
            </div> 

            </div>
           </div>
        );
    }
}

export default Policy;