import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./services.css";
import c8 from "./Photo/covidpic10.jpg";
import c9 from "./Photo/covidpic11.jpg";


class Services extends Component {
    state= {
        album2 : [
            {
            album_photo2 : c8
            },
            {
                album_photo2 : c9
            }
        ]
    }

    render() {

    const {album2} = this.state;

    return (
            <div>
            <div className="services">
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

                <div className="services_details">
                <div className="services_head">
                <h2>SERVICES</h2>
                </div>
                
                <div className="services_note">
                <h2>Training and Consultation</h2>
                <p>Dasent Health Centre has morethan 10years experience rendering health care services </p>
                <p>to the people, In other to promote good health and wellbeing of the people.</p>
                <p>Our experience over the years as helped us to deliver adequate services and train many to</p>
                <p>become professionals, And work with communities and government who needed their services.</p>
                <p>We render health services for the purpose of giving health support for the community people.</p>
                </div>
                  
                <div className="services_photos">
                  {album2.map((photo2, i)=>{
                      return(
                          <div className="photo2" key= {i}>
                        <img src={photo2.album_photo2}  alt="NO"  className="image3" />

                          </div>
                      )
                  })}
                  
                </div>

                 
                </div>
            </div>
        );
    }
}

export default Services;