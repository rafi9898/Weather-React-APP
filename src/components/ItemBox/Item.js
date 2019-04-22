import React from "react";
import logo from "../../assets/logo-city.png";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = props => {
  const { details } = props;

  return (
    <div className="container">
      {!details.location ? (
        <div className="card">
          <div className="card-body">
            <p className="card-text">Location not found!</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <img src={logo} className="card-img-top" alt="city logo" />
          <div className="card-body">
            <p className="card-text">{details.location.name}</p>
            <p className="card-text">{details.location.country}</p>
            <p className="card-text">
              Temperature:{" "}
              <span className="current-temp">{details.current.temp_c}°C</span>
            </p>
            <button className="btn btn-lg btn-danger">
              <Link
                to={{
                  pathname: `/details/${details.location.name}`,
                  state: { details }
                }}
              >
                SEE MORE
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
