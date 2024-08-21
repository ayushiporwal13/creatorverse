import React from "react";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "80vh",
      }}
      className="d-flex flex-column justify-content-center align-items-center text-white"
    >
      <h1 className="display-1 w-100">CreatoVerse</h1>
      <div className="w-100">
        <Link to="/" className="text-white btn btn-dark btn-lg border-success p-3 m-5 fw-semibold w-25">
          View All Creators
        </Link>

        <Link to="/add-creator" className="text-white btn btn-dark btn-lg border-success p-3 m-5 fw-semibold w-25">
          Add A Creator
        </Link>
      </div>
    </div>
  );
};

export default Header;
