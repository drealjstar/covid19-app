import React, { Component } from "react";
import Axios from "axios";
import "./stat.css";
import Album from "./covid_pictures";

class Stat extends Component {
  state = {

    stat: []

  }

  componentDidMount() {
    Axios.get("https://corona.lmao.ninja/v2/countries?sort=country").then((result) => {
      console.log(result, "iiiiuuu");

      this.setState({ stat: result.data[73] });
    });
  }

  render() {

    const { stat } = this.state;

    return (
      <div className="home_page">
        <div className="image"><h1 className="title">NIGERIA CORONAVIRUS UPDATE</h1></div>

        <div className="statistics" >

          <div className="total_population">
            <h2>POPULATION</h2>
            <div className="nigeria"><h1>{stat.population}</h1></div>
          </div>

          <div className="total_infected">
            <h2>CASES</h2>
            <div className="infected"><h1>{stat.cases}</h1></div>
          </div>

          <div className="total_recovering">
            <h2>RECOVERED</h2>
            <div className="recovered"><h1>{stat.recovered}</h1></div>
          </div>

          <div className="total_death">
            <h2>DEATH</h2>
            <div className="death"><h1>{stat.deaths}</h1></div>
          </div>

          <div className="active_cases">
            <h2>ACTIVE CASES</h2>
            <div className="active"><h1>{this.state.stat.active}</h1></div>
          </div>
        </div>
        <Album />
      </div>
    );
  }
}

export default Stat;