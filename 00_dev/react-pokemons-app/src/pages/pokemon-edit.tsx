import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({
  match,
}) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  console.log(match.params.id);

  useEffect(() => {
    console.log(match.params.id);
    PokemonService.getPokemon(+match.params.id).then((pokemon) => {
      setPokemon(pokemon);
    });
  }, [match.params.id]);

  return (
    <div>
      {/* si pokemon n'est pas null, alors isEditForm = true */}
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        // <h4 className="center">Aucun pokémon à afficher !</h4>
        <h4 className="center">
          <Loader />
        </h4>
      )}
    </div>
  );
};

export default PokemonEdit;
