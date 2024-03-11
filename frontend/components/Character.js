import React, { useState } from 'react';


function Character({ character }) {
  const [showPlanetInfo, setShowPlanetInfo] = useState(false);

  const togglePlanetInfo = () => {
    setShowPlanetInfo(!showPlanetInfo)
  };

  

  return (
    <div className="character-card">
      <h3 className="character-name" onClick = {togglePlanetInfo}>
        {character.name}
        </h3>
      {showPlanetInfo && (
        <p>
          Planet: 
          <span className = "character-planet">{character.homeworld.name}
          </span>
          </p>
      )}
    </div>
  );
}

export default Character

