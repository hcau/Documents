import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({}) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  // useEffect(() => {
  //   PokemonService.getPokemon(+match.params.id).then((pokemon) => {
  //     setPokemon(pokemon);
  //   });
  // }, [match.params.id]);

  return (
    <div>
      {pokemon && (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon}></PokemonForm>
        </div>
      )}
    </div>
  );
};

export default PokemonEdit;
