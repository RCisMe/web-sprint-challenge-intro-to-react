import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlCharacters = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [charactersRes, planetsRes] = await Promise.all([
          axios.get(urlCharacters),
          axios.get(urlPlanets)
        ]);

        const characterData = charactersRes.data;
        const planetsData = planetsRes.data;

        const charactersWithPlanets = characterData.map(character => {
          const homeworld = planetsData.find(planet => planet.id === character.homeworld);
          return {
            id: character.id,
            name: character.name,
            birth_year: character.birth_year,
            homeworld: homeworld ? homeworld : { name: 'Unknown' } // Ensure homeworld is an object
          };
        });

        setCharacters(charactersWithPlanets);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App