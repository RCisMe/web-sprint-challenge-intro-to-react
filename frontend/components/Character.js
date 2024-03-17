// frontend/components/Character.js
import React, { useState } from 'react';

const Character = ({ character }) => {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{character.name}</h3> {/* Apply class name for character name */}
      <p>ID: {character.id}</p>
      <p>Date of Birth: {character.birth_year}</p>
      {showHomeworld && <p className="character-planet">Home World: {character.homeworld.name}</p>} {/* Apply class name for character planet */}
    </div>
  );
};

export default Character;
