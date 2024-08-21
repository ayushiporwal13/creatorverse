import React from "react";
import { Link } from "react-router-dom";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const kitchenSinkcard = ({ creator }) => {
  const youTubeLink = `https://www.youtube.com/${creator.youtube}`;
  const twitterLink = `https://www.x.com/${creator.twitter}`;
  const instagramLink = `https://www.instagram.com/${creator.instagram}`;

  const cardLink = {
    textDecoration: 'none',
    backgroundColor: '#343a40',
    transition: 'color 0.3s ease-in-out',
  }

  return (
    <div className="card d-flex flex-row p-0 m-1">
      <img src={creator.image} className="card-img w-25" alt="..." />
      <div className="card-body bg-dark text-white text-start d-flex flex-column">
        <h5 className="card-title fs-2 fw-bold text-info">{creator.name}</h5>
        <p className="card-text">{creator.desc}</p>
        {creator.youtube != "" && (
          <a href={youTubeLink} className="card-link text-white my-3 p-1 w-25 mx-3" style={cardLink}>
            <img src={youtube} style={{width:'15%'}} className='p-1' alt="youtube" />@{creator.youtube}
          </a>
        )}
        {creator.twitter != "" && (
          <a href={twitterLink} className="card-link text-white my-3 p-1 w-25" style={cardLink}>
            <img src={twitter} style={{width:'15%'}} className='p-1' alt="twitter" />@{creator.twitter}
          </a>
        )}
        {creator.instagram != "" && (
          <a href={instagramLink} className="card-link text-white my-3 p-1 w-25" style={cardLink}>
            <img src={instagram} style={{width:'15%'}} className='p-1' alt="instagram" />@{creator.instagram}
          </a>
        )}
      </div>
    </div>
  );
};

export default kitchenSinkcard;
