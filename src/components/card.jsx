import React from "react";
import { Link } from "react-router-dom";
import pencilSquare from "../assets/pencil-square.svg";
import infoCircle from "../assets/info-circle.svg";

const Card = ({ creator }) => {
  return (
    <div className="card bg-light m-3" style={{maxHeight:"50vw", width:"40%"}}>
      <img src={creator.image} className="card-img-top img-fluid" alt="..." style={{maxHeight:"50vh"}}/>
      <div className="card-body">
        <h5 className="card-title fs-4">{creator.name}</h5>
        <p className="card-text">{creator.desc}</p>
        <Link to={`/view-creator/${creator.id}`} className="m-2">
          <img src={infoCircle} alt="info" style={{width:'6%'}} />
        </Link>
        <Link to={`/edit-creator/${creator.id}`} className="m-2">
          <img src={pencilSquare} alt="edit" style={{width:'6%'}} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
