import React from 'react';
import './PlayerCard.css';

const PlayerCard = props => {
   
    return (
      <div className="card">
        <div className="card-info">
        <h3 className="name">{props.player.name}</h3>
        <p className="username">{props.player.country}</p>
        <p>Searches: {props.player.searches}</p>
        </div>
      </div>   
    );
  };
  
  export default PlayerCard;