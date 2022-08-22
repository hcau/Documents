import React, { useState, useEffect } from 'react';
import POKEMONS from '../models/mock-pokemon';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return pokemons;
};

export default usePokemons;
