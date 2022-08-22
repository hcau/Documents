import React, { FunctionComponent } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../helpers/usePokemons';
import Pokemon from '../models/pokemon';

const PokemonList: FunctionComponent = () => {
  const pokemons: Pokemon[] = usePokemons();

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              borderColor="#555588"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
