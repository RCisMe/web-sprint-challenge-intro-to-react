// frontend/components/Character.js
import React, { useState } from 'react';

const Character = ({ character }) => {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3>{character.name}</h3>
      <p>ID: {character.id}</p>
      <p>Date of Birth: {character.birth_year}</p>
      {showHomeworld && <p>Home World: {character.homeworld.name}</p>}
    </div>
  );
};

export default Character;