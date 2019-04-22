import React from "react";
import logo from "../../assets/logo-city.png";
import "./Details.css";
import { Link } from "react-router-dom";

const Details = props => {
  const { details } = props.location.state;

  return (
    <div className="container">
      <div className="card">
        <img src={logo} className="card-img-top" alt="city logo" />
        <div className="card-body">
          <p className="card-text">{details.location.name}</p>
          <p className="card-text">{details.location.country}</p>
          <p className="card-text">
            Temperature:{" "}
            <span className="current-temp">
              {details.current.temp_c}°C{" "}
              <img
                src={details.current.condition.icon}
                alt={details.current.condition.icon}
              />{" "}
            </span>
            ({details.current.condition.text})
          </p>

          <p className="card-text">
            Wind:{" "}
            <span className="current-temp">
              {details.current.wind_kph} KPH{" "}
            </span>
          </p>

          <p className="card-text">
            Last Updated: {details.current.last_updated}
          </p>

          <button className="btn btn-lg btn-danger">
            <Link to="/">Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
