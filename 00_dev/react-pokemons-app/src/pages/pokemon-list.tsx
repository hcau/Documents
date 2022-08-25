import React, { FunctionComponent, useState, useEffect } from 'react';
import PokemonCard from '../components/pokemon-card';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import { useHistory } from 'react-router-dom';

type ThePokemon = {
  pokemon: Pokemon;
};

const PokemonList: FunctionComponent = () => {
  // const pokemons: Pokemon[] = usePokemons();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokemonService.getPokemons().then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const [pokemon, setPokemon] = useState<ThePokemon>();
  const history = useHistory();

  const addPokemon = () => {
    PokemonService.addPokemon(pokemon).then(() => {
      history.push(`/pokemons`);
    });
  };

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <span className="btn-floating halfway-fab waves-effect waves-light">
        <i onClick={addPokemon} className="material-icons">
          add
        </i>
      </span>
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
