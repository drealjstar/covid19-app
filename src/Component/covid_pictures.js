import React, { Component } from "react";
import "./covid_pictures.css";
import Endbar from "./endbar";
import c2 from "./Photo/covidpic2.jpeg";
import c3 from "./Photo/covidpic3.jpeg";
import c4 from "./Photo/covidpic4.png";
import c5 from "./Photo/covidpic5.jpg";
import c6 from "./Photo/covidpic6.png";
import c7 from "./Photo/covidpic7.jpg";


class Album extends Component {
    state = {
        album: [
            {
                album_photo: c2
            },
            {
                album_photo: c3
            },
            {
                album_photo: c4
            },
            {
                album_photo: c5
            },
            {
                album_photo: c6
            },
            {
                album_photo: c7
            }
        ]
    }

    render() {

        const { album } = this.state;


        return (
            <div>
                <div className="covid_pictures">
                    {album.map((photo, i) => {
                        return (
                            <div className="photo" key={i}>

                                <img src={photo.album_photo} alt="No" className="image2" />

                            </div>
                        )
                    })}
                </div>
                <Endbar />
            </div>
        )
    }
}

export default Album;

